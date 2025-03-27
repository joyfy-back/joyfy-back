import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { AuthRepository } from '../../infrastructure/auth.repository';
import { JwtService } from '@nestjs/jwt';
import { Result } from 'apps/api-gateway/generalTypes/errorResponseType';

export class DeleteSeissionCommand {
  constructor(
    public userId: string,
    public deviceId: string,
  ) {}
}

@CommandHandler(DeleteSeissionCommand)
export class DeleteSeissionUseCase
  implements ICommandHandler<DeleteSeissionCommand>
{
  constructor(
    protected authRepository: AuthRepository,
    protected jwtService: JwtService,
  ) {}
  async execute(inputModul: DeleteSeissionCommand): Promise<Result> {
    try {
      const sesions = await this.authRepository.completelyRemoveSesion(
        inputModul.deviceId,
        inputModul.userId,
      );

      if (!sesions.success) {
        throw new Error();
      }
      return {
        success: true,
        message: '',
        data: [],
      };
    } catch (error) {
      return {
        success: false,
        message: '',
        data: [],
      };
    }
  }
}
