import { Body, Controller, Get, HttpCode, HttpException, HttpStatus, Post, Request, Res, UseGuards } from "@nestjs/common";
import { UserCreateModul } from "../modules/input/user.create.module";
import { CreateUserCommand } from "../application/use-case/create.user.case";
import { CommandBus } from "@nestjs/cqrs";
import { UserMapOutput } from "../type/auth.type";
import { Result } from "apps/api-gateway/generalTypes/errorResponseType";
import { EmailServece } from "../application/emai.sevece";



@Controller('auth')
export class AuthController {
    constructor(protected commandBuse: CommandBus, protected emaiServece: EmailServece) { }

    @Post("registration")
    @HttpCode(201)
    async registerUser(@Body() inputModul: UserCreateModul) {

        const user: Result = await this.commandBuse.execute(
            new CreateUserCommand(
                inputModul.username,
                inputModul.email,
                inputModul.password,
                inputModul.passwordConfirmation,
                inputModul.agreeToTerms
            )
        )

        if (!user.success) {
            throw new HttpException('error when creating user', HttpStatus.BAD_REQUEST);
        }

        return { message: `We have sent a link to confirm your email to ${inputModul.email}` };
    }

    @Post("registration-confirmation")
    @HttpCode(204)
    async registrationConfirmation(@Body("code") code: string) {

        const user = await this.emaiServece.confirmEmail(code);
        if (!user.success) {
            throw new HttpException({
                message: [
                    { message: user.message, field: 'code' },
                ]
            }, HttpStatus.BAD_REQUEST);
        }

    }
}
