import { Injectable } from "@nestjs/common";
import { EmailConfirmationWithUser, UserMapOutput, UserType } from "../type/auth.type";
import { PrismaService } from "../../shared/prisma/prisma.service";
import { Result } from "apps/api-gateway/generalTypes/errorResponseType";
import { userMapOutputModul } from "../modules/output/user.map.module";

@Injectable()
export class AuthRepository {
    constructor(protected prisma: PrismaService) { }

    async createUser(inputModul: UserType): Promise<Result<UserMapOutput>> {
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
                data: [userMapOutputModul(user)]
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


}
