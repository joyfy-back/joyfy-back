import { Module, Provider } from '@nestjs/common';
import { AuthController } from './controllers/auth.controller';
import { AuthRepository } from './infrastructure/auth.repository';
import { AuthService } from './application/auth.service';
import { CqrsModule } from '@nestjs/cqrs';
import { UserNameIsExistConstraint } from './utility/decorators/user-name-is.exist.decorator';
import { JwtModule } from '@nestjs/jwt';
import { EmailService } from './application/email.service';
import { EmailIsExistConstraint } from './utility/decorators/email-is-exist.decorator';
import { CreateUserUseCase } from './application/use-cases/create-user.use-case';
import { DeleteSessionUseCase } from './application/use-cases/delete-session.use-case';
import { LoginUserUseCase } from './application/use-cases/login-user.use-case';
import { PasswordRecoveryUseCase } from './application/use-cases/password-recovery.use-case';
import { UpdatePasswordUseCase } from './application/use-cases/update-password.use-case';
// import { GithubStrategy } from './strategy/github.strategy';
import { JwtStrategy } from './strategy/jwt.strategy';
import { DeleteAllSessionsExceptCurrentUseCase } from './application/use-cases/delete-all.sessions.except.current.use-case';
import {
  DeleteByIdSessionCommand,
  DeleteByIdUseCase,
} from './application/use-cases/delete-session.by.id.use-case';
import { AuthQueryRepository } from './infrastructure/auth.query.repository';
import { ConfigService } from '@nestjs/config';
import { RecaptchaService } from './application/recaptcha.service';
import { CreateAccountUserGithubCommand, CreateAccountUserGithubUseCase } from './application/use-cases/create-account.user.github.use-case';
import { GithubStrategy } from './strategy/github.strategy';
import { GoogleStrategy } from './strategy/google.strategy';
import { CreateAccountUserGoogleUseCase } from './application/use-cases/create-account.user.google.use-case';

const authProviders: Provider[] = [
  AuthRepository,
  AuthService,
  EmailService,
  RecaptchaService,
  EmailIsExistConstraint,
  UserNameIsExistConstraint,
  AuthQueryRepository,
];
const useCaseAuth = [
  CreateUserUseCase,
  LoginUserUseCase,
  DeleteSessionUseCase,
  PasswordRecoveryUseCase,
  UpdatePasswordUseCase,
  DeleteAllSessionsExceptCurrentUseCase,
  DeleteByIdSessionCommand,
  DeleteByIdUseCase,
  CreateAccountUserGithubUseCase,
  CreateAccountUserGoogleUseCase
];
const strategys = [JwtStrategy, GithubStrategy, GoogleStrategy];

@Module({
  imports: [
    CqrsModule,
    JwtModule.registerAsync({
      useFactory: async (configService: ConfigService) => {
        const apiSettings = configService.get('apiSettings', { infer: true });
        return {
          secret: apiSettings.SECRET,
          signOptions: {
            expiresIn: '40m',
          },
        };
      },
      inject: [ConfigService],
    }),
  ],
  controllers: [AuthController],
  providers: [...authProviders, ...useCaseAuth, ...strategys],
  exports: [],
})
export class AuthModule { }
