import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { AddPostData } from '../../../../../api-gateway/src/post/types/api-post-types';

export class AddPostCommand {
  constructor(public data: AddPostData) {}
}

@CommandHandler(AddPostCommand)
export class AddPostUseCase implements ICommandHandler<AddPostCommand> {
  constructor() {}

  async execute(command: AddPostCommand): Promise<any> {
    const { addPostDto, username, userId } = command.data;
    return { a: 'kljafkjadkjflakjdf' };
  }
}

/*
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

  const user: Result<any> = await this.authRepository.createUser(
    newUser,
    dto.accounts,
  );

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
}*/
