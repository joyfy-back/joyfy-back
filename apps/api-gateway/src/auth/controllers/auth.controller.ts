import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Request,
  Res,
  UseGuards,
} from '@nestjs/common';
import { Response } from 'express';
import { CommandBus } from '@nestjs/cqrs';
import { TokensType } from '../type/auth.type';
import { Result } from 'apps/api-gateway/generalTypes/errorResponseType';
import { AuthService } from '../application/auth.service';
import {
  ApiBearerAuth,
  ApiBody,
  ApiOperation,
  ApiResponse,
} from '@nestjs/swagger';
import { UserCreateInputDto } from '../dto/input-dto/user-create.dto';
import { UserLoginInputDto } from '../dto/input-dto/user-login.dto';
import { DeleteSessionCommand } from '../application/use-cases/delete-session.use-case';
import { EmailInputDto } from '../dto/input-dto/user-email.dto';
import { NewPasswordInputDto } from '../dto/input-dto/new-password.dto';
import { CreateUserCommand } from '../application/use-cases/create-user.use-case';
import { EmailService } from '../application/email.service';
import { LoginUserCommand } from '../application/use-cases/login-user.use-case';
import { PasswordRecoveryCommand } from '../application/use-cases/password-recovery.use-case';
import { UpdatePasswordCommand } from '../application/use-cases/update-password.use-case';
import { AuthQueryRepository } from '../infrastructure/auth.query.repository';
import { JwtAuthGuard } from '../strategy/jwt.strategy';
import { DeleteAllSessionsExceptCurrentCommand } from '../application/use-cases/delete-all.sessions.except.current.use-case';
import { DeleteByIdSessionCommand } from '../application/use-cases/delete-session.by.id.use-case';

@Controller('auth')
export class AuthController {
  constructor(
    protected commandBuse: CommandBus,
    protected authService: AuthService,
    protected emailService: EmailService,
    protected authQueryRepository: AuthQueryRepository,
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
        dto.agreeToTerms,
        dto.passwordConfirmation,
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
    const result: any =
      await this.authService.checkValidateUserSessionByRefreshToken(
        req.cookies.refreshToken,
      );

    if (!result.success) {
      throw new HttpException('UNAUTHORIZED', HttpStatus.UNAUTHORIZED);
    }

    await this.commandBuse.execute(
      new DeleteSessionCommand(result.data[0].userId, result.data[0].deviceId),
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
    const res = await this.emailService.resendCode(email);

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

  @Get('devices')
  @HttpCode(200)
  @UseGuards(JwtAuthGuard)
  async getDevices(@Request() req) {
    const sesions = await this.authQueryRepository.getSessions(req.user.userId);

    if (!sesions.success) {
      throw new HttpException(
        `${sesions.message}`,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }

    return sesions;
  }

  @Delete('devices')
  @HttpCode(204)
  @UseGuards(JwtAuthGuard)
  async deleteDevices(@Request() req) {
    const result = await this.commandBuse.execute(
      new DeleteAllSessionsExceptCurrentCommand(
        req.user.userId,
        req.user.deviceId,
      ),
    );

    if (!result.success) {
      throw new HttpException(
        `${result.message}`,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Delete('devices/:id')
  @HttpCode(204)
  @UseGuards(JwtAuthGuard)
  async deleteByIdDevices(@Param('id') id: string, @Request() req) {
    const sesionDevice = await this.authQueryRepository.getSessionById(id);

    if (!sesionDevice?.success && sesionDevice?.message === 'not found') {
      throw new HttpException('sesion not found', HttpStatus.NOT_FOUND);
    }

    if (!sesionDevice?.success) {
      throw new HttpException(
        `${sesionDevice?.message}`,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }

    const result = await this.commandBuse.execute(
      new DeleteByIdSessionCommand(req.user.deviceId),
    );

    if (!result?.success) {
      throw new HttpException(
        `${sesionDevice?.message}`,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
