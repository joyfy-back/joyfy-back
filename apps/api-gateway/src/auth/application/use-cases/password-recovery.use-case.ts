import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { randomUUID } from 'crypto';
import { EmailService } from '../email.service';
import { Result } from 'apps/api-gateway/generalTypes/errorResponseType';
import { AuthRepository } from '../../infrastructure/auth.repository';
import { EmailInputDto } from '../../dto/input-dto/user-email.dto';
import { formatErrorMessage } from '../../../shared/libs/format-error-message';

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
  async execute(dto: EmailInputDto): Promise<Result> {
    try {
      const passwordRecoveryCode = randomUUID();

      const result = await this.authRepository.postPasswordRecoveryCode(
        passwordRecoveryCode,
        dto.email,
      );

      if (!result.success) {
        throw new Error();
      }

      void this.emailService.sendEmail('null', dto.email, passwordRecoveryCode);

      return {
        success: true,
        message: result.message,
        data: [],
      };
    } catch (error) {
      const message = 'error creating duplicate password';

      return {
        success: false,
        message: formatErrorMessage(error, message),
        data: [],
      };
    }
  }
}
