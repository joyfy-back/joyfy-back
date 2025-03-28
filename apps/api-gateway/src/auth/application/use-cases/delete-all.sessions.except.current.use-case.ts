import { JwtService } from '@nestjs/jwt';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { AuthRepository } from '../../infrastructure/auth.repository';
import { formatErrorMessage } from '../../../shared/libs/format-error-message';
import { Result } from 'apps/api-gateway/generalTypes/errorResponseType';

export class DeleteAllSessionsExceptCurrentCommand {
  constructor(
    public userId: string,
    public deviceId: string,
  ) {}
}

@CommandHandler(DeleteAllSessionsExceptCurrentCommand)
export class DeleteAllSessionsExceptCurrentUseCase
  implements ICommandHandler<DeleteAllSessionsExceptCurrentCommand>
{
  constructor(
    protected authRepository: AuthRepository,
  ) {}
  async execute(dto: DeleteAllSessionsExceptCurrentCommand): Promise<Result> {
    try {
      const result = await this.authRepository.deleteAllSessionsExceptCurrent(
        dto.deviceId,
        dto.userId,
      );

      if (!result.success) {
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
