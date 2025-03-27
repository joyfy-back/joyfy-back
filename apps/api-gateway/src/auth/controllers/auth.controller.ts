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
import { Response } from 'express';
import { CommandBus } from '@nestjs/cqrs';
import { TokensType } from '../type/auth.type';
import { Result } from 'apps/api-gateway/generalTypes/errorResponseType';
import { EmailService } from '../application/emai.service';
import { AuthService } from '../application/auth.service';

import {
  ApiBearerAuth,
  ApiBody,
  ApiOperation,
  ApiResponse,
} from '@nestjs/swagger';

/* Commands */
import { LoginUserCommand } from '../application/use-case/login.user.case';
import { CreateUserCommand } from '../application/use-case/create.user.case';
import { DeleteSeissionCommand } from '../application/use-case/delete.session.case';
import { UpdatePasswordCommand } from '../application/use-case/update.password.case';
import { PasswordRecoveryCommand } from '../application/use-case/password.recovery.case';

/* DTO's */
import { EmailInputDto } from '../dto/input-dto/user-email.dto';
import { UserLoginInputDto } from '../dto/input-dto/user-login.dto';
import { UserCreateInputDto } from '../dto/input-dto/user-create.dto';
import { NewPasswordInputDto } from '../dto/input-dto/new-password.dto';

@Controller('auth')
export class AuthController {
  constructor(
    protected commandBuse: CommandBus,
    protected authService: AuthService,
    protected emailService: EmailService,
  ) {}

  @Post('registration')
  @HttpCode(201)
  @ApiOperation({ summary: 'Register a new user' })
  @ApiBody({ type: UserCreateInputDto })
  @ApiResponse({ status: 201, description: 'User registered successfully.' })
  @ApiResponse({ status: 400, description: 'Bad request.' })
  async registerUser(@Body() dto: UserCreateInputDto) {
    const user: Result = await this.commandBuse.execute(
      new CreateUserCommand(
        dto.username,
        dto.email,
        dto.password,
        dto.passwordConfirmation,
        dto.agreeToTerms,
      ),
    );

    if (!user.success) {
      throw new HttpException(
        'error when creating user',
        HttpStatus.BAD_REQUEST,
      );
    }

    return {
      message: `We have sent a link to confirm your email to ${dto.email}`,
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
    const user = await this.emailService.confirmEmail(code);
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
  @ApiBody({ type: UserLoginInputDto })
  @ApiResponse({ status: 200, description: 'User logged in successfully.' })
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  async login(
    @Body() dto: UserLoginInputDto,
    @Res() res: Response,
    @Request() req,
  ) {
    const checkCredentials = await this.authService.checkCredentials(
      dto.Email,
      dto.Password,
    );

    if (!checkCredentials.success) {
      throw new HttpException('UNAUTHORIZED', HttpStatus.UNAUTHORIZED);
    }

    const userAgent = req.headers['user-agent'] || 'unknown device';

    const tokens: Result<TokensType> = await this.commandBuse.execute(
      new LoginUserCommand(
        checkCredentials.data[0].userId,
        checkCredentials.data[0].username,
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
  async registrationEmailResending(@Body('email') email: string) {
    const res = await this.emailService.resendingCode(email);

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
  @ApiBody({ type: EmailInputDto })
  @ApiResponse({
    status: 204,
    description: 'Password recovery email sent successfully.',
  })
  @ApiResponse({ status: 400, description: 'Bad request.' })
  async passwordRecovery(@Body() dto: EmailInputDto) {
    const { email } = dto;

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
  @ApiBody({ type: NewPasswordInputDto })
  @ApiResponse({ status: 204, description: 'Password updated successfully.' })
  @ApiResponse({ status: 404, description: 'User not found.' })
  async newPassword(@Body() dto: NewPasswordInputDto) {
    const result = await this.authService.checkPasswordRecovery(
      dto.recoveryCode,
    );

    if (!result.success) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }

    await this.commandBuse.execute(
      new UpdatePasswordCommand(result.data[0].email, dto.newPassword),
    );
  }
}
