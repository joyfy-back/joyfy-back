import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { randomUUID } from 'crypto';
import { add } from 'date-fns';
import { hash } from 'argon2';
import { UserMapOutput, UserType } from '../../type/auth.type';
import { EmailService } from '../emai.service';
import { Result } from 'apps/api-gateway/generalTypes/errorResponseType';
import { AuthRepository } from '../../infrastructure/auth.repository';
import { UserCreateInputDto } from '../../dto/input-dto/user-create.dto';

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
    } catch (error: unknown) {
      let message = 'An unexpected error occurred when creating a user';

      if (error instanceof Error) {
        message = error.message;
      } else if (typeof error === 'string') {
        message = error;
      }

      return {
        success: false,
        message: message,
        data: [],
      };
    }
  }
}
