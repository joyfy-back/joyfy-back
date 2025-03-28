import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { add } from 'date-fns';
import { hash } from 'argon2';
import { randomUUID } from 'crypto';
import { EmailService } from '../email.service';
import { UserMapOutput, UserType } from '../../type/auth.type';
import { AuthRepository } from '../../infrastructure/auth.repository';
import { UserCreateInputDto } from '../../dto/input-dto/user-create.dto';
import { formatErrorMessage } from '../../../shared/libs/format-error-message';
import { Result } from '../../../../../../libs/shared/types';

export class CreateUserCommand {
  constructor(
    public email: string,
    public username: string,
    public password: string,
    public agreeToTerms: boolean,
    public passwordConfirmation: string,
  ) {}
}

@CommandHandler(CreateUserCommand)
export class CreateUserUseCase implements ICommandHandler<CreateUserCommand> {
  constructor(
    protected emailService: EmailService,
    protected authRepository: AuthRepository,
  ) {}
  async execute(dto: UserCreateInputDto): Promise<Result<UserMapOutput>> {
    try {
      const passwordHash = await hash(dto.password);

      const newUser: UserType = {
        username: dto.username,
        email: dto.email,
        passwordHash: passwordHash,
        emailConfirmation: {
          confirmationCode: randomUUID(),
          expirationDate: add(new Date(), {
            hours: 1,
            minutes: 30,
          }),
          isConfirmed: false,
        },

        agreeToTerms: dto.agreeToTerms,
      };

      const user: Result<any> = await this.authRepository.createUser(newUser);

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
    } catch (error: unknown) {
      const message = 'An unexpected error occurred when creating a user';

      return {
        success: false,
        message: formatErrorMessage(error, message),
        data: [],
      };
    }
  }
}
