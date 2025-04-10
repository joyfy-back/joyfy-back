import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { JwtService } from '@nestjs/jwt';
import { v4 as uuidv4 } from 'uuid';
import { DeviceSessions } from '@prisma/client';
import { AuthRepository } from '../../infrastructure/auth.repository';
import { TokensType } from '../../type/auth.type';
import { formatErrorMessage } from '../../../shared/libs/format-error-message';
import { Result } from '../../../../../../libs/shared/types';

export class LoginUserCommand {
  constructor(
    public userId: string,
    public userName: string,
    public userAgent: string,
    public ip: string,
    public email: string,
    public isOAuthGoogleProvider?: boolean,
    public isOAuthGithubProvider?: boolean
  ) {}
}

@CommandHandler(LoginUserCommand)
export class LoginUserUseCase implements ICommandHandler<LoginUserCommand> {
  constructor(
    protected authRepository: AuthRepository,
    protected jwtService: JwtService,
  ) {}
  async execute(dto: LoginUserCommand): Promise<Result<TokensType>> {
    try {
      const deviceId = uuidv4();

      const payload = {
        userName: dto.userName,
        userId: dto.userId,
        deviceId: deviceId,
        email: dto.email,
        isOAuthProvider: false,
        authProvider: ''
      };
      if (dto.isOAuthGithubProvider || dto.isOAuthGoogleProvider) {
        payload.isOAuthProvider = true; 
    
        if (dto.isOAuthGithubProvider) {
          payload.authProvider = 'github';
        } else if (dto.isOAuthGoogleProvider) {
          payload.authProvider = 'google';
        }
      }

      const tokens = {
        accessToken: this.jwtService.sign(payload),
        refreshToken: this.jwtService.sign(payload, { expiresIn: '1d' }),
      };

      const deviceSession: DeviceSessions = {
        deviceId: deviceId,
        userId: dto.userId,
        lastActiveDate: this.jwtService.decode(tokens.refreshToken).iat,
        ip: dto.ip,
        title: dto.userAgent,
      };

      const result = await this.authRepository.addSessionUser(deviceSession);

      if (!result.success) {
        throw new Error();
      }

      return {
        success: true,
        message: 'session in the database recorded',
        data: [tokens],
      };
    } catch (error) {
      const message = 'Error writing to db session';

      return {
        success: false,
        message: formatErrorMessage(error, message),
        data: [],
      };
    }
  }
}
