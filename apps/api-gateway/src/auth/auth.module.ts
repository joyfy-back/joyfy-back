import { Module, Provider } from '@nestjs/common';
import { AuthController } from './controllers/auth.controller';
import { AuthRepository } from './infrastructure/auth.repository';
import { AuthService } from './application/auth.service';
import { EmailService } from './application/emai.service';
import { CreateUserUseCase } from './application/use-case/create.user.case';
import { CqrsModule } from '@nestjs/cqrs';
import { EmailIsExistContsraint } from './utility/decorators/email-Is-exist.decorator';
import { UserNameIsExistContsraint } from './utility/decorators/user-name-is.exist.decorator';
import { JwtModule } from '@nestjs/jwt';
import { LoginUserUseCase } from './application/use-case/login.user.case';
import { DeleteSeissionUseCase } from './application/use-case/delete.session.case';
import { PasswordRecoveryUseCase } from './application/use-case/password.recovery.case';
import { UpdatePasswordUseCase } from './application/use-case/update.password.case';

const authProviders: Provider[] = [
  AuthRepository,
  AuthService,
  EmailService,
  EmailIsExistContsraint,
  UserNameIsExistContsraint,
];
const useCaseAuth = [
  CreateUserUseCase,
  LoginUserUseCase,
  DeleteSeissionUseCase,
  PasswordRecoveryUseCase,
  UpdatePasswordUseCase,
];

@Module({
  imports: [
    CqrsModule,
    JwtModule.register({
      secret: 'your_secret_key',
      signOptions: { expiresIn: '5m' },
    }),
  ],
  controllers: [AuthController],
  providers: [...authProviders, ...useCaseAuth],
  exports: [],
})
export class AuthModule {}
