import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { randomUUID } from 'crypto';
import { EmailService } from '../emai.service';
import { Result } from 'apps/api-gateway/generalTypes/errorResponseType';
import { AuthRepository } from '../../infrastructure/auth.repository';
import { EmailInputModele } from '../../modules/input/email.user.module';

export class PasswordRecoveryCommand {
  constructor(public email: string) {}
}

@CommandHandler(PasswordRecoveryCommand)
export class PasswordRecoveryUseCase
  implements ICommandHandler<PasswordRecoveryCommand>
{
  constructor(
    protected emailService: EmailService,
    protected authRepository: AuthRepository,
  ) {}
  async execute(inputModul: EmailInputModele): Promise<Result> {
    try {
      const passwordRecoveryCode = randomUUID();

      const result = await this.authRepository.postPasswordRecoveryCode(
        passwordRecoveryCode,
        inputModul.email,
      );

      if (!result.success) {
        throw new Error();
      }
      this.emailService.sendEmail(
        'null',
        inputModul.email,
        passwordRecoveryCode,
      );

      return {
        success: true,
        message: result.message,
        data: [],
      };
    } catch (error) {
      return {
        success: false,
        message: 'error creating duplicate password',
        data: [],
      };
    }
  }
}
