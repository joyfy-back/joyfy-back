import { Body, Controller, Get, HttpCode, HttpException, HttpStatus, Post, Request, Res, UseGuards } from "@nestjs/common";
import { UserCreateModul } from "../modules/input/user.create.module";
import { CreateUserCommand } from "../application/use-case/create.user.case";
import { CommandBus } from "@nestjs/cqrs";
import { UserMapOutput } from "../type/auth.type";
import { Result } from "apps/api-gateway/generalTypes/errorResponseType";



@Controller('auth')
export class AuthController {
    constructor(protected commandBuse: CommandBus) { }

    @Post("registration")
    @HttpCode(204)
    async registerUser(@Body() inputModul: UserCreateModul) {

        const user: Result<UserMapOutput> = await this.commandBuse.execute(
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

    }

}
