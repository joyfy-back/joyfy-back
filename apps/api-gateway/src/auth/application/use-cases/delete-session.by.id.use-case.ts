import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { AuthRepository } from '../../infrastructure/auth.repository';
import { formatErrorMessage } from '../../../shared/libs/format-error-message';
import { Result } from 'apps/api-gateway/generalTypes/errorResponseType';

export class DeleteByIdSessionCommand {
  constructor(public deviceId: string) {}
}

@CommandHandler(DeleteByIdSessionCommand)
export class DeleteByIdUseCase
  implements ICommandHandler<DeleteByIdSessionCommand>
{
  constructor(protected authRepository: AuthRepository) {}
  async execute(dto: DeleteByIdSessionCommand): Promise<Result> {
    try {
      debugger;
      const result = await this.authRepository.deleteSessionById(dto.deviceId);

      if (!result?.success) {
        throw new Error('Failed to delete session');
      }

      return {
        success: true,
        message: '',
        data: [],
      };
    } catch (error: unknown) {
      return {
        success: false,
        message: formatErrorMessage(
          error,
          'An error occurred attempting to delete the session',
        ),
        data: [],
      };
    }
  }
}
