import { Injectable } from "@nestjs/common";
import { UserMapOutput, UserType } from "../type/auth.type";
import { PrismaService } from "../../shared/prisma/prisma.service";
import { Result } from "apps/api-gateway/generalTypes/errorResponseType";
import { User } from "@prisma/client";
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

    // async findUserByConfirEmail(code: string): Promise<Result<User>> {
    //     try {

    //         const result = await this.prisma.user.findFirst({
    //             where: {
    //                 confirmationCode: code, // Фильтруем по confirmationCode
    //             },
    //         });

    //         if (!result) {
    //             throw new Error()
    //         }

    //         return {
    //             success: true,
    //             message: 'confirmation code is correct',
    //             data: [result]
    //         };

    //     } catch (error) {

    //         return {
    //             success: false,
    //             message: 'confirmation code is incorrect',
    //             data: []
    //         }

    //     }
    // }

}
