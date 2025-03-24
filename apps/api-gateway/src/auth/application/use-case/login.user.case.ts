import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { EmailService } from "../emai.service";
import { AuthRepository } from "../../infrastructure/auth.repository";
import { v4 as uuidv4 } from 'uuid';
import { JwtService } from "@nestjs/jwt";
import { DeviceSessions } from "@prisma/client";
import { Result } from "apps/api-gateway/generalTypes/errorResponseType";
import { TokensType } from "../../type/auth.type";




export class LoginUserCommand {
    constructor(
        public userId: string,
        public userName: string,
        public userAgent: string,
        public ip: string,
    ) { }
}

@CommandHandler(LoginUserCommand)
export class LoginUserUseCase implements ICommandHandler<LoginUserCommand> {
    constructor(protected authRepository: AuthRepository, protected jwtService: JwtService) { }
    async execute(inputModul: LoginUserCommand): Promise<Result<TokensType>> {
        try {
            const deviceId = uuidv4();

            const payload = {
                userName: inputModul.userName,
                userId: inputModul.userId,
                deviceId: deviceId,
            };

            const tokens = {
                accessToken: this.jwtService.sign(payload),
                refreshToken: this.jwtService.sign(payload, { expiresIn: "1h" })
            }

            const deviceSession: DeviceSessions = {
                deviceId: deviceId,
                userId: inputModul.userId,
                lastActiveDate: this.jwtService.decode(tokens.refreshToken).iat,
                ip: inputModul.ip,
                title: inputModul.userAgent,
            };

            const result = await this.authRepository.addSessionUser(deviceSession)

            if (!result.success) {
                throw new Error()
            }

            return {
                success: true,
                message: "session in the database recorded",
                data: [tokens]

            }

        } catch (error) {

            return {
                success: false,
                message: "error writing to db session",
                data: []
            }

        }

    }
}
