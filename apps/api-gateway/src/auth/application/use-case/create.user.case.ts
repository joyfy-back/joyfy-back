import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { randomUUID } from "crypto";
import { UserCreateModul } from "../../modules/input/user.create.module";
import { add } from "date-fns";
import * as argon2 from 'argon2';
import { UserMapOutput, UserType } from "../../type/auth.type";
import { EmailServece } from "../emai.sevece";
import { Result } from "apps/api-gateway/generalTypes/errorResponseType";
import { AuthRepository } from "../../infrastructure/auth.repository";



export class CreateUserCommand {
    constructor(
        public username: string,
        public email: string,
        public password: string,
        public passwordConfirmation: string,
        public agreeToTerms: boolean,
    ) { }
}

@CommandHandler(CreateUserCommand)
export class CreateUserUseCase implements ICommandHandler<CreateUserCommand> {
    constructor(protected emailServece: EmailServece, protected authRepository: AuthRepository) { }
    async execute(inputModul: UserCreateModul): Promise<Result<UserMapOutput>> {
        try {

            const passwordHash = await argon2.hash(inputModul.password);

            const newUser: UserType = {
                username: inputModul.username,
                email: inputModul.email,
                passwordHash: passwordHash,
                emailConfirmation: {
                    confirmationCode: randomUUID(),
                    expirationDate: add(new Date(), {
                        hours: 1,
                        minutes: 30,
                    }),
                    isConfirmed: false
                },
                agreeToTerms: inputModul.agreeToTerms
            }

            const user: Result<UserMapOutput> = await this.authRepository.createUser(newUser)

            if (!user.success) {
                throw new Error()
            }

            this.emailServece.sendEmail(newUser.emailConfirmation.confirmationCode, newUser.email);

            return {
                success: true,
                message: 'the user was created successfully',
                data: user.data
            }

        } catch (error) {

            return {
                success: false,
                message: 'an error occurred when creating a user',
                data: []
            }

        }

    }
}
