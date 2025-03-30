import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { AuthRepository } from '../../infrastructure/auth.repository';
import { formatErrorMessage } from '../../../shared/libs/format-error-message';
import { Result } from '../../../../../../libs/shared/types';
import { JwtService } from '@nestjs/jwt';

export class CreateAccountUserGithubCommand {
  constructor(
    public email: string,
    public username: string,
    public githubId: string,
  ) {}
}

@CommandHandler(CreateAccountUserGithubCommand)
export class CreateAccountUserGithubUseCase
  implements ICommandHandler<CreateAccountUserGithubCommand>
{
  constructor(
    protected authRepository: AuthRepository,
    protected jwtService: JwtService,
  ) {}
  async execute(dto: CreateAccountUserGithubCommand): Promise<Result<any>> {
    try {
      const result = await this.authRepository.createAccountAndGithubUser(dto);

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
