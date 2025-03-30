import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { AuthRepository } from '../../infrastructure/auth.repository';
import { formatErrorMessage } from '../../../shared/libs/format-error-message';
import { Result } from '../../../../../../libs/shared/types';
import { JwtService } from '@nestjs/jwt';

export class CreateAccountUserGoogleCommand {
  constructor(
    public email: string,
    public username: string,
    public googleId: string,
    public avatar: string,
  ) {}
}

@CommandHandler(CreateAccountUserGoogleCommand)
export class CreateAccountUserGoogleUseCase
  implements ICommandHandler<CreateAccountUserGoogleCommand>
{
  constructor(
    protected authRepository: AuthRepository,
    protected jwtService: JwtService,
  ) {}
  async execute(dto: CreateAccountUserGoogleCommand): Promise<Result<any>> {
    try {
      const result = await this.authRepository.createAccountAndGoogleUser(dto);

      if (!result.success) {
        throw new Error();
      }

      return {
        success: true,
        message: 'the user was created successfully',
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
