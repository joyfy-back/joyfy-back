import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { AuthRepository } from '../../infrastructure/auth.repository';
import { formatErrorMessage } from '../../../shared/libs/format-error-message';
import { Result } from '../../../../../../libs/shared/types';
import { JwtService } from '@nestjs/jwt';

export class UpdateAccountUserGoogleCommand {
  constructor(
    public email: string,
    public username: string,
    public avatar: string,
  ) {}
}

@CommandHandler(UpdateAccountUserGoogleCommand)
export class UpdateAccountUserGoogleUseCase
  implements ICommandHandler<UpdateAccountUserGoogleCommand>
{
  constructor(
    protected authRepository: AuthRepository,
    protected jwtService: JwtService,
  ) {}
  async execute(dto: UpdateAccountUserGoogleCommand): Promise<Result<any>> {
    try {
      const result = await this.authRepository.updateAccountUserGoogle(dto);

      if (!result.success) {
        throw new Error();
      }

      return {
        success: true,
        message: '',
        data: [result],
      };
    } catch (error: unknown) {
      return {
        success: false,
        message: formatErrorMessage(
          error,
          'An unexpected error occurred when creating a user',
        ),
        data: [],
      };
    }
  }
}
