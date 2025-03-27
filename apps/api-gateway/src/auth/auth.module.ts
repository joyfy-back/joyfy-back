import { Module, Provider } from '@nestjs/common';
import { AuthController } from './controllers/auth.controller';
import { AuthRepository } from './infrastructure/auth.repository';
import { AuthService } from './application/auth.service';
import { CqrsModule } from '@nestjs/cqrs';
import { UserNameIsExistConstraint } from './utility/decorators/user-name-is.exist.decorator';
import { JwtModule } from '@nestjs/jwt';
// import { GithubStrategy } from './strategy/github.strategy';
import { EmailService } from './application/email.service';
import { EmailIsExistConstraint } from './utility/decorators/email-is-exist.decorator';
import { CreateUserUseCase } from './application/use-cases/create-user.use-case';
import { DeleteSessionUseCase } from './application/use-cases/delete-session.use-case';
import { LoginUserUseCase } from './application/use-cases/login-user.use-case';
import { PasswordRecoveryUseCase } from './application/use-cases/password-recovery.use-case';
import { UpdatePasswordUseCase } from './application/use-cases/update-password.use-case';



const authProviders: Provider[] = [
  AuthRepository,
  AuthService,
  EmailService,
  EmailIsExistConstraint,
  UserNameIsExistConstraint,
];
const useCaseAuth = [
  CreateUserUseCase,
  LoginUserUseCase,
  DeleteSessionUseCase,
  PasswordRecoveryUseCase,
  UpdatePasswordUseCase,
];
// const strategys = [GithubStrategy]

@Module({
  imports: [CqrsModule, JwtModule.register({
    secret: 'your_secret_key',
    signOptions: { expiresIn: '5m' },
  }),],
  controllers: [AuthController],
  providers: [...authProviders, ...useCaseAuth],
  exports: [],
})
export class AuthModule {}
