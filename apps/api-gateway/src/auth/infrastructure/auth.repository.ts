import { Injectable } from "@nestjs/common";
import { EmailConfirmationWithUser, UserMapOutput, UserType } from "../type/auth.type";
import { PrismaService } from "../../shared/prisma/prisma.service";
import { Result } from "apps/api-gateway/generalTypes/errorResponseType";
import { User } from "@prisma/client";

@Injectable()
export class AuthRepository {
    constructor(protected prisma: PrismaService) { }

    async createUser(inputModul: UserType): Promise<Result> {
        try {

            const user = await this.prisma.user.create({
                data: {
                    username: inputModul.username,
                    email: inputModul.email,
                    passwordHash: inputModul.passwordHash,
                    agreeToTerms: inputModul.agreeToTerms,
                    emailConfirmation: {
                        create: {
                            confirmationCode: inputModul.emailConfirmation.confirmationCode,
                            expirationDate: inputModul.emailConfirmation.expirationDate,
                            isConfirmed: inputModul.emailConfirmation.isConfirmed,
                        },
                    },
                },
                include: {
                    emailConfirmation: true, // Включаем данные подтверждения email
                },
            });


            return {
                success: true,
                message: 'user successfully created in db',
                data: [user]
            }

        } catch (error) {

            return {
                success: false,
                message: 'failed to create user in db',
                data: []
            }

        }
    }

    async findUserByConfirEmail(code: string): Promise<Result<EmailConfirmationWithUser>> {
        try {

            const emailConfirmation = await this.prisma.emailConfirmation.findFirst({
                where: {
                    confirmationCode: code,
                },
                include: {
                    user: true,
                },
            });


            if (!emailConfirmation) {
                throw new Error()
            }

            return {
                success: true,
                message: 'confirmation code is correct',
                data: [emailConfirmation]
            };

        } catch (error) {

            return {
                success: false,
                message: 'confirmation code is incorrect',
                data: []
            }

        }
    }

    async updateConfirmation(userId: string): Promise<Result> {
        try {

            const result = await this.prisma.emailConfirmation.updateMany({
                where: {
                    userId: userId,
                },
                data: {
                    isConfirmed: true,
                },
            });

            if (result.count === 0) {
                throw new Error()
            }

            return {
                success: true,
                message: 'mail confirmed',
                data: []
            };

        } catch (error) {

            return {
                success: false,
                message: 'mail not confirmed',
                data: []
            };

        }
    }

    async findIsEmail(email: string): Promise<Result<User>> {
        try {
            const user = await this.prisma.user.findUnique({
                where: { email: email },
            });

            if (!user) {
                return {
                    success: false,
                    message: `No user with such email: ${email}`,
                    data: [],
                };
            }

            return {
                success: true,
                message: `There is a user with such email: ${email}`,
                data: [user],
            };
        } catch (error) {
            return {
                success: false,
                message: 'An error occurred while searching for the user',
                data: [],
            };
        }
    }

    async findIsUserName(username: string): Promise<Result<User>> {
        try {
            const user = await this.prisma.user.findUnique({
                where: { username: username },
            });

            if (!user) {
                return {
                    success: false,
                    message: `No user with such username: ${username}`,
                    data: [],
                };
            }

            return {
                success: true,
                message: `There is a user with such username: ${username}`,
                data: [user],
            };
        } catch (error) {
            return {
                success: false,
                message: 'An error occurred while searching for the user',
                data: [],
            };
        }
    }

}
