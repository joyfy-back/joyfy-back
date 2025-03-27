import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { UserCreateInputModule } from '../../modules/input/user.create.module';
import * as argon2 from 'argon2';
import { UserMapOutput } from '../../type/auth.type';
import { Result } from 'apps/api-gateway/generalTypes/errorResponseType';
import { AuthRepository } from '../../infrastructure/auth.repository';

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
  async execute(
    inputModul: UserCreateInputModule,
  ): Promise<Result<UserMapOutput>> {
    try {
      const passwordHash = await argon2.hash(inputModul.password);

      const result = await this.authRepository.updatePassword(
        inputModul.email,
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
      return {
        success: false,
        message: 'an error occurred when creating a user',
        data: [],
      };
    }
  }
}
