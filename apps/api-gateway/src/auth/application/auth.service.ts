import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as crypto from 'crypto';
import { User } from '@prisma/client';
import { verify } from 'argon2';
import { AuthRepository } from '../infrastructure/auth.repository';
import { formatErrorMessage } from '../../shared/libs/format-error-message';
import { Result } from 'libs/shared/types';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';
import { ParamQueryType } from '../type/auth.type';

@Injectable()
export class AuthService {
  constructor(
    protected authRepository: AuthRepository,
    protected jwtService: JwtService,
    protected configService: ConfigService,
  ) { }

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
  ): Promise<Result<[]>> {
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

    await this.authRepository.updateSession(
      this.jwtService.decode(tokens.refreshToken).iat,
      payload.userId,
      payload.deviceId,
    );

    return tokens;
  }

  async checkPasswordRecovery(code: string): Promise<Result<any>> {
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
  async getOauthGitHub(isLocalHost: boolean) {
    try {
      const state = crypto.randomBytes(16).toString('hex');
      const scope = 'user:email read:user';

      const params = {
        client_id: isLocalHost
          ? 'Ov23linfRpuNdG9dqBPE'
          : this.configService.get('apiSettings.GITHUB_CLIENT_ID'),
        redirect_uri: isLocalHost
          ? 'https://gateway.joyfy.online/api/v1/auth/github/callback'
          : this.configService.get('apiSettings.GITHUB_CALLBACK_URL'),
        scope: scope,
        state: state,
      };

      // Формируем URL для перенаправления
      const authUrl = `https://github.com/login/oauth/authorize?${new URLSearchParams(params)}`;

      return {
        success: true,
        message: 'Redirecting to GitHub',
        data: { authUrl, state },
      };
    } catch (error) {
      console.error('GitHub OAuth error:', error);
      return {
        success: false,
        message: 'Failed to initiate GitHub OAuth',
        data: null,
      };
    }
  }
  async getOauthGoogle(isLocalHost: boolean) {
    try {
      const state = crypto.randomBytes(16).toString('hex');
      const config = this.configService.get('apiSettings')

      const params = {
        client_id: config.GOOGLE_CLIENT_ID,
        redirect_uri: 'https://gateway.joyfy.online/api/v1/auth/google/callback',
        response_type: 'code',
        scope: 'openid email profile',
        state: state, // Для защиты от CSRF
        prompt: 'consent' // Принудительно запрашивает разрешения
      };

      // Формируем URL для перенаправления
      const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?${new URLSearchParams(params)}`;

      return {
        success: true,
        message: 'Redirecting to GitHub',
        data: { authUrl },
      };
    } catch (error) {
      console.error('GitHub OAuth error:', error);
      return {
        success: false,
        message: 'Failed to initiate GitHub OAuth',
        data: null,
      };
    }
  }

}
