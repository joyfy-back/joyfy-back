import { Module, Provider } from '@nestjs/common';
import { AuthController } from './controllers/auth.controller';
import { AuthRepository } from './infrastructure/auth.repository';
import { AuthServece } from './application/auth.servece';
import { EmailServece } from './application/emai.sevece';
import { CreateUserUseCase } from './application/use-case/create.user.case';
import { CqrsModule } from '@nestjs/cqrs';
import { EmailIsExistContsraint } from './utility/decorators/email-Is-exist.decorator';
import { UserNameIsExistContsraint } from './utility/decorators/user-name-is.exist.decorator';



const authProviders: Provider[] = [AuthRepository, AuthServece, EmailServece, EmailIsExistContsraint, UserNameIsExistContsraint]
const useCaseAuth = [CreateUserUseCase]

@Module({
  imports: [CqrsModule],
  controllers: [AuthController],
  providers: [...authProviders, ...useCaseAuth],
  exports: [],
})
export class AuthModule { }
