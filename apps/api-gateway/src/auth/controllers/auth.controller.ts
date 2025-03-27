import {
  Body,
  Controller,
  HttpCode,
  HttpException,
  HttpStatus,
  Post,
  Request,
  Res,
} from '@nestjs/common';
import { UserCreateInputModule } from '../modules/input/user.create.module';
import { Response } from 'express';
import { CreateUserCommand } from '../application/use-case/create.user.case';
import { CommandBus } from '@nestjs/cqrs';
import { TokensType } from '../type/auth.type';
import { Result } from 'apps/api-gateway/generalTypes/errorResponseType';
import { EmailService } from '../application/emai.service';
import { AuthService } from '../application/auth.service';
import { UserLoginInputModule } from '../modules/input/user.login.module';
import { LoginUserCommand } from '../application/use-case/login.user.case';
import { DeleteSeissionCommand } from '../application/use-case/delete.session.case';
import { EmailInputModele } from '../modules/input/email.user.module';
import { PasswordRecoveryCommand } from '../application/use-case/password.recovery.case';
import { NewPasswordInputModele } from '../modules/input/new.password.module';
import { UpdatePasswordCommand } from '../application/use-case/update.password.case';
import {
  ApiBearerAuth,
  ApiBody,
  ApiOperation,
  ApiResponse,
} from '@nestjs/swagger';

@Controller('auth')
export class AuthController {
  constructor(
    protected commandBuse: CommandBus,
    protected authService: AuthService,
    protected emaiService: EmailService,
  ) {}

  @Post('registration')
  @HttpCode(201)
  @ApiOperation({ summary: 'Register a new user' })
  @ApiBody({ type: UserCreateInputModule })
  @ApiResponse({ status: 201, description: 'User registered successfully.' })
  @ApiResponse({ status: 400, description: 'Bad request.' })
  async registerUser(@Body() inputModul: UserCreateInputModule) {
    const user: Result = await this.commandBuse.execute(
      new CreateUserCommand(
        inputModul.username,
        inputModul.email,
        inputModul.password,
        inputModul.passwordConfirmation,
        inputModul.agreeToTerms,
      ),
    );

    if (!user.success) {
      throw new HttpException(
        'error when creating user',
        HttpStatus.BAD_REQUEST,
      );
    }

    return {
      message: `We have sent a link to confirm your email to ${inputModul.email}`,
    };
  }

  @Post('registration-confirmation')
  @HttpCode(204)
  @ApiOperation({ summary: 'Confirm user registration' })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        code: {
          type: 'string',
        },
      },
    },
  })
  @ApiResponse({ status: 204, description: 'Email confirmed successfully.' })
  @ApiResponse({ status: 400, description: 'Bad request.' })
  async registrationConfirmation(@Body('code') code: string) {
    const user = await this.emaiService.confirmEmail(code);
    if (!user.success) {
      throw new HttpException(
        {
          message: [{ message: user.message, field: 'code' }],
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  @Post('login')
  @HttpCode(200)
  @ApiOperation({ summary: 'User login' })
  @ApiBody({ type: UserLoginInputModule })
  @ApiResponse({ status: 200, description: 'User logged in successfully.' })
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  async login(
    @Body() inputModul: UserLoginInputModule,
    @Res() res: Response,
    @Request() req,
  ) {
    const checkCreadentlais = await this.authService.checkCreadentlais(
      inputModul.Email,
      inputModul.Password,
    );

    if (!checkCreadentlais.success) {
      throw new HttpException('UNAUTHORIZED', HttpStatus.UNAUTHORIZED);
    }

    const userAgent = req.headers['user-agent'] || 'unknown device';

    const tokens: Result<TokensType> = await this.commandBuse.execute(
      new LoginUserCommand(
        checkCreadentlais.data[0].userId,
        checkCreadentlais.data[0].username,
        userAgent,
        req.ip,
      ),
    );

    if (!tokens.success) {
      throw new HttpException('UNAUTHORIZED', HttpStatus.UNAUTHORIZED);
    }

    res.cookie('refreshToken', tokens.data[0].refreshToken, {
      httpOnly: true,
      secure: true,
      maxAge: 30 * 24 * 60 * 60 * 1000, //30 day
    });

    return res.json({ accessToken: tokens.data[0].accessToken });
  }

  @Post('logout')
  @HttpCode(204)
  @ApiOperation({ summary: 'User logout' })
  @ApiBearerAuth()
  @ApiResponse({ status: 204, description: 'User logged out successfully.' })
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  async logout(@Request() req) {
    const result =
      await this.authService.checkValidateUserSessionByRefreshToken(
        req.cookies.refreshToken,
      );

    if (!result.success) {
      throw new HttpException('UNAUTHORIZED', HttpStatus.UNAUTHORIZED);
    }

    await this.commandBuse.execute(
      new DeleteSeissionCommand(result.data[0].userId, result.data[0].deviceId),
    );
  }

  @Post('refresh-token')
  @HttpCode(200)
  @ApiOperation({ summary: 'Refresh access token' })
  @ApiBearerAuth()
  @ApiResponse({ status: 200, description: 'Token refreshed successfully.' })
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  async refreshToken(@Res() res: Response, @Request() req) {
    const result =
      await this.authService.checkValidateUserSessionByRefreshToken(
        req.cookies.refreshToken,
      );

    if (!result.success) {
      throw new HttpException('UNAUTHORIZED', HttpStatus.UNAUTHORIZED);
    }

    const tokens = await this.authService.updateToken(result.data);

    res.cookie('refreshToken', tokens.refreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: 'strict',
      maxAge: 30 * 24 * 60 * 60 * 1000,
    });

    return res.json({ accessToken: tokens.accessToken });
  }

  @Post('registration-email-resending')
  @HttpCode(204)
  @ApiOperation({ summary: 'Resend registration email' })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        email: {
          type: 'string',
        },
      },
    },
  })
  @ApiResponse({ status: 204, description: 'Email sent successfully.' })
  @ApiResponse({ status: 400, description: 'Bad request.' })
  async registrationEmailResending(
    @Body('email') email: string,
    @Request() req,
  ) {
    const res = await this.emaiService.resendingCode(email);

    if (!res.success) {
      throw new HttpException(
        {
          message: [{ message: 'User not found', field: 'email' }],
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  @Post('password-recovery')
  @HttpCode(204)
  @ApiOperation({ summary: 'Recover user password' })
  @ApiBody({ type: EmailInputModele })
  @ApiResponse({
    status: 204,
    description: 'Password recovery email sent successfully.',
  })
  @ApiResponse({ status: 400, description: 'Bad request.' })
  async passwordRecovery(@Body() emailInputModul: EmailInputModele) {
    const { email } = emailInputModul;
    const result = await this.commandBuse.execute(
      new PasswordRecoveryCommand(email),
    );

    if (!result.success) {
      throw new HttpException(`${result.message}`, HttpStatus.BAD_REQUEST);
    }
  }

  @Post('new-password')
  @HttpCode(204)
  @ApiOperation({ summary: 'Set new password' })
  @ApiBody({ type: NewPasswordInputModele })
  @ApiResponse({ status: 204, description: 'Password updated successfully.' })
  @ApiResponse({ status: 404, description: 'User not found.' })
  async newPassword(@Body() inputNewData: NewPasswordInputModele) {
    const result = await this.authService.checkPasswordRecovery(
      inputNewData.recoveryCode,
    );

    if (!result.success) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }

    await this.commandBuse.execute(
      new UpdatePasswordCommand(result.data[0].email, inputNewData.newPassword),
    );
  }
}
