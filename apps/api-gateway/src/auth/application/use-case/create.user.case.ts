import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { randomUUID } from 'crypto';
import { UserCreateInputDto } from '../../modules/input/user-create.dto';
import { add } from 'date-fns';
import * as argon2 from 'argon2';
import { UserMapOutput, UserType } from '../../type/auth.type';
import { EmailService } from '../emai.service';
import { Result } from 'apps/api-gateway/generalTypes/errorResponseType';
import { AuthRepository } from '../../infrastructure/auth.repository';

export class CreateUserCommand {
  constructor(
    public username: string,
    public email: string,
    public password: string,
    public passwordConfirmation: string,
    public agreeToTerms: boolean,
  ) {}
}

@CommandHandler(CreateUserCommand)
export class CreateUserUseCase implements ICommandHandler<CreateUserCommand> {
  constructor(
    protected emailService: EmailService,
    protected authRepository: AuthRepository,
  ) {}
  async execute(inputDto: UserCreateInputDto): Promise<Result<UserMapOutput>> {
    try {
      const passwordHash = await argon2.hash(inputDto.password);

      const newUser: UserType = {
        username: inputDto.username,
        email: inputDto.email,
        passwordHash: passwordHash,
        emailConfirmation: {
          confirmationCode: randomUUID(),
          expirationDate: add(new Date(), {
            hours: 1,
            minutes: 30,
          }),
          isConfirmed: false,
        },

        agreeToTerms: inputDto.agreeToTerms,
      };

      const user: Result<UserMapOutput> =
        await this.authRepository.createUser(newUser);

      if (!user.success) {
        throw new Error();
      }

      void this.emailService.sendEmail(
        newUser.emailConfirmation.confirmationCode,
        newUser.email,
      );

      return {
        success: true,
        message: 'the user was created successfully',
        data: user.data,
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
