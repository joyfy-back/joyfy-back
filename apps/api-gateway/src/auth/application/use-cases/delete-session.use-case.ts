import { JwtService } from '@nestjs/jwt';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { AuthRepository } from '../../infrastructure/auth.repository';
import { formatErrorMessage } from '../../../shared/libs/format-error-message';
import { Result } from 'apps/api-gateway/generalTypes/errorResponseType';

export class DeleteSessionCommand {
  constructor(
    public userId: string,
    public deviceId: string,
  ) {}
}

@CommandHandler(DeleteSessionCommand)
export class DeleteSessionUseCase
  implements ICommandHandler<DeleteSessionCommand>
{
  constructor(
    protected authRepository: AuthRepository,
    protected jwtService: JwtService,
  ) {}
  async execute(dto: DeleteSessionCommand): Promise<Result> {
    try {
      const result = await this.authRepository.completelyRemoveSession(
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
