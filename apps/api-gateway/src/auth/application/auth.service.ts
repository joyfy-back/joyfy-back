import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from '@prisma/client';
import { verify } from 'argon2';
import { AuthRepository } from '../infrastructure/auth.repository';
import { formatErrorMessage } from '../../shared/libs/format-error-message';
import { Result } from 'apps/api-gateway/generalTypes/errorResponseType';

@Injectable()
export class AuthService {
  constructor(
    protected authRepository: AuthRepository,
    protected jwtService: JwtService,
  ) {}

  async checkCredentials(
    email: string,
    password: string,
  ): Promise<Result<User>> {
    const user = await this.authRepository.findIsEmail(email);
    if (!user.success) {
      return {
        success: false,
        message: 'There is no such email',
        data: [],
      };
    }

    const isPasswordValid = await verify(user.data[0].passwordHash, password);

    if (!isPasswordValid) {
      return {
        success: false,
        message: 'The password is incorrect',
        data: [],
      };
    }

    return {
      success: true,
      message: 'password and email are correct',
      data: [user.data[0]],
    };
  }

  async checkValidateUserSessionByRefreshToken(
    refreshToken: string,
  ): Promise<Result> {
    try {
      const decodedToken = await this.jwtService.verify(refreshToken);
      const sessionResult = await this.authRepository.findRottenSessions(
        decodedToken.userId,
        decodedToken.deviceId,
      );

      if (
        !sessionResult.success ||
        decodedToken.iat < sessionResult.data[0].lastActiveDate
      ) {
        throw new Error();
      }

      return {
        success: true,
        message: 'Session and token are valid',
        data: [decodedToken],
      };
    } catch (error) {
      const message = 'Invalid session or token';
      return {
        success: false,
        message: formatErrorMessage(error, message),
        data: [],
      };
    }
  }

  async updateToken(payload: any) {
    const body = {
      userLogin: payload.userLogin,
      userId: payload.userId,
      deviceId: payload.deviceId,
    };

    const tokens = {
      accessToken: this.jwtService.sign(body),
      refreshToken: this.jwtService.sign(body, { expiresIn: '1h' }),
    };

    await this.authRepository.updateSesion(
      this.jwtService.decode(tokens.refreshToken).iat,
      payload.userId,
      payload.deviceId,
    );

    return tokens;
  }

  async checkPasswordRecovery(code: string): Promise<Result> {
    try {
      const result = await this.authRepository.checkPasswordRecoveryCode(code);

      if (!result.success) {
        throw new Error();
      }

      return {
        success: true,
        message: '',
        data: [result],
      };
    } catch (error) {
      console.error('Error finding recovery password record:', error);
      return {
        success: false,
        message: '',
        data: [],
      };
    }
  }
}
