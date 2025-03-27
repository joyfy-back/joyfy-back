import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { hash } from 'argon2';
import { UserMapOutput } from '../../type/auth.type';
import { AuthRepository } from '../../infrastructure/auth.repository';
import { UserCreateInputDto } from '../../dto/input-dto/user-create.dto';
import { formatErrorMessage } from '../../../shared/libs/format-error-message';
import { Result } from '../../../../../../libs/shared/types';

export class UpdatePasswordCommand {
  constructor(
    public email: string,
    public password: string,
  ) {}
}

@CommandHandler(UpdatePasswordCommand)
export class UpdatePasswordUseCase
  implements ICommandHandler<UpdatePasswordCommand>
{
  constructor(protected authRepository: AuthRepository) {}
  async execute(dto: UserCreateInputDto): Promise<Result<UserMapOutput>> {
    try {
      const passwordHash = await hash(dto.password);

      const result = await this.authRepository.updatePassword(
        dto.email,
        passwordHash,
      );

      if (!result.success) {
        throw new Error();
      }

      return {
        success: true,
        message: 'the user was created successfully',
        data: [],
      };
    } catch (error) {
      const message = 'an error occurred when creating a user';
      return {
        success: false,
        message: formatErrorMessage(error, message),
        data: [],
      };
    }
  }
}
