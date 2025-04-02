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
  UnauthorizedException,
  UseGuards,
} from '@nestjs/common';
import { Response } from 'express';
import { CommandBus } from '@nestjs/cqrs';
import { TokensType } from '../type/auth.type';
import { Result } from 'apps/api-gateway/generalTypes/errorResponseType';
import { AuthService } from '../application/auth.service';
import { UserResponseDto } from '../dto/output-dto/user-response.dto';
import {
  ApiBearerAuth,
  ApiBody,
  ApiCookieAuth,
  ApiExcludeEndpoint,
  ApiOperation,
  ApiParam,
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
import { AuthGuard } from '@nestjs/passport';
import { JwtService } from '@nestjs/jwt';
import { CreateAccountUserGithubCommand } from '../application/use-cases/create-account.user.github.use-case';
import { CreateAccountUserGoogleCommand } from '../application/use-cases/create-account.user.google.use-case';
import { RecaptchaService } from '../application/recaptcha.service';
import axios from 'axios';

@Controller('auth')
export class AuthController {
  constructor(
    protected commandBuse: CommandBus,
    protected authService: AuthService,
    protected emailService: EmailService,
    protected authQueryRepository: AuthQueryRepository,
    protected jwtService: JwtService,
    protected recaptchaService: RecaptchaService,
  ) {}

  @Post('registration')
  @HttpCode(201)
  @ApiOperation({ summary: 'Register a new user' })
  @ApiBody({ type: UserCreateInputDto })
  @ApiResponse({ status: 201, description: 'User registered successfully.' })
  @ApiResponse({ status: 400, description: 'Bad request.' })
  async registerUser(@Body() dto: UserCreateInputDto) {
    const result = await this.authQueryRepository.getAccount(dto.email);

    let accounts = {
      isWasRegistered: false,
      data: result.data,
    };
    if (!result.success) {
      accounts['isWasRegistered'] = false;
    } else {
      accounts['isWasRegistered'] = true;
    }

    const user: Result = await this.commandBuse.execute(
      new CreateUserCommand(
        dto.email,
        dto.username,
        dto.password,
        dto.agreeToTerms,
        dto.passwordConfirmation,
        accounts,
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
        dto.Email,
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

  @Get('me')
  @UseGuards(JwtAuthGuard)
  @ApiOperation({
    summary: 'Get current user info',
    description: 'Returns authenticated user information',
  })
  @ApiBearerAuth()
  @ApiResponse({
    status: 200,
    description: 'User information',
    type: UserResponseDto,
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized - invalid access token',
  })
  async getUser(@Res() res: Response, @Request() req) {
    return res.json(req.user);
  }

  @Post('refresh-token')
  @HttpCode(200)
  @ApiOperation({
    summary: 'Refresh access token',
    description:
      'Generates new access token using refresh token from cookies. Refresh token must be sent in HttpOnly cookie.',
  })
  @ApiBearerAuth()
  @ApiResponse({
    status: 200,
    description: 'Returns accessToken',
    schema: {
      example: {
        accessToken: 'dwe234324esadfa312312edsaasd',
      },
    },
  })
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  @ApiCookieAuth('refreshToken')
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
  @ApiBody({
    description: 'Email and reCAPTCHA verification',
    type: EmailInputDto,
    examples: {
      example: {
        value: {
          email: 'user@example.com',
          recaptcha: '03AGdBq27Q...',
        },
      },
    },
  })
  @ApiResponse({
    status: 204,
    description: 'Password recovery email sent successfully.',
  })
  @ApiResponse({ status: 400, description: 'Bad request.' })
  async passwordRecovery(
    @Body() dto: EmailInputDto,
    @Body('recaptcha') recaptcha: string,
  ) {
    await this.recaptchaService.validateRecaptcha(recaptcha);

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
  @ApiBody({
    description: 'New password details with verification codes',
    type: NewPasswordInputDto,
    examples: {
      example: {
        value: {
          recoveryCode: '550e8400-e29b-41d4-a716-446655440000',
          newPassword: 'NewSecurePassword123!',
          recaptcha: '03AGdBq27Q...',
        },
      },
    },
  })
  @ApiResponse({ status: 204, description: 'Password updated successfully.' })
  @ApiResponse({ status: 404, description: 'User not found.' })
  async newPassword(
    @Body() dto: NewPasswordInputDto,
    @Body('recaptcha') recaptcha: string,
  ) {
    await this.recaptchaService.validateRecaptcha(recaptcha);

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

  @Get('github/callback')
  @UseGuards(AuthGuard('github'))
  @ApiExcludeEndpoint()
  async githubCallback(@Request() req, @Res() res: Response) {
    try {
      const userAgent = req.headers['user-agent'] || 'unknown device';

      if (!req.user) {
        throw new UnauthorizedException('GitHub authentication failed');
      }
      const result = await this.commandBuse.execute(
        new CreateAccountUserGithubCommand(
          req.user.email,
          req.user.username,
          req.user.githubId,
        ),
      );

      if (!result.success) {
        throw new HttpException(
          `${result.message}`,
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }

      const tokens: Result<TokensType> = await this.commandBuse.execute(
        new LoginUserCommand(
          req.user.githubId,
          req.user.username,
          userAgent,
          req.ip,
          req.user.email,
        ),
      );

      const accessToken = tokens.data[0].accessToken;

      res.cookie('refreshToken', tokens.data[0].refreshToken, {
        httpOnly: true,
        maxAge: 7 * 24 * 60 * 60 * 1000,
        sameSite: 'strict',
      });

      res.redirect(307, 'http://localhost:3000/auth/github/login-success');
      return res.json({ accessToken });
    } catch (error) {
      console.error('GitHub auth error:', error);
      return res.redirect(
        'http://localhost:3000/auth/login?error=github_failed',
      );
    }
  }

  @Get('github')
  @HttpCode(302)
  @ApiOperation({
    summary: 'Initiate GitHub OAuth flow',
    description:
      'Redirects user to GitHub for authentication. After successful login, GitHub will redirect back to the callback URL.',
  })
  @ApiResponse({
    status: 302,
    description:
      'Redirects user to GitHub OAuth page for authentication. After successful login on GitHub, user will be redirected to `${base_url}auth/github/login-success` with access token in response and refresh token set in HttpOnly cookie. If authentication fails, user will be redirected to `${base_url}auth/login.',
    headers: {
      Location: {
        description: 'GitHub OAuth URL',
        schema: {
          type: 'string',
          example: 'https://github.com/login/oauth/authorize?client_id=...',
        },
      },
    },
  })
  @ApiResponse({
    status: 500,
    description: 'Internal server error',
    schema: {
      example: {
        statusCode: 500,
        message: 'Authorization URL not found',
      },
    },
  })
  async gitOauthGitHub(@Request() req, @Res() res: Response) {
    const result = await this.authService.getOauthGitHub(true);

    if (!result.success) {
      throw new HttpException(
        `${result.message}`,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
    if (!result.data) {
      throw new HttpException(
        'Authorization URL not found',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
    return res.redirect(result.data.authUrl);
  }
  @Get('google/callback')
  @UseGuards(AuthGuard('google'))
  @ApiExcludeEndpoint()
  async googleCallback(@Request() req, @Res() res: Response) {
    const user = req.user;

    const result = await this.commandBuse.execute(
      new CreateAccountUserGoogleCommand(
        req.user.email,
        req.user.username,
        req.user.googleId,
        req.user.avatar,
      ),
    );

    if (!result.success) {
      throw new HttpException(
        `${result.message}`,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }

    const token = this.jwtService.sign({
      id: user.googleId,
      username: user.username,
    });

    return res.redirect(
      `https://joyfy.online/auth/google/login-success?token=${token}`,
    );
  }

  @Get('devices')
  @HttpCode(200)
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get all devices sessions' })
  @ApiResponse({
    status: 200,
    description: 'Returns all active sessions for user',
    schema: {
      example: {
        data: [
          {
            deviceId: 'string',
            ip: 'string',
            title: 'string',
            lastActiveDate: '2023-01-01T00:00:00.000Z',
          },
        ],
      },
    },
  })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @ApiResponse({ status: 500, description: 'Internal Server Error' })
  async getDevices(@Request() req) {
    const sesions = await this.authQueryRepository.getSessions(req.user.userId);

    if (!sesions.success) {
      throw new HttpException(
        `${sesions.message}`,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }

    return {
      data: sesions.data,
    };
  }

  @Delete('devices')
  @HttpCode(204)
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Terminate all sessions except current' })
  @ApiResponse({
    status: 204,
    description: 'All sessions deleted except current',
  })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @ApiResponse({ status: 500, description: 'Internal Server Error' })
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
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Terminate specific session' })
  @ApiParam({ name: 'id', description: 'Device session ID' })
  @ApiResponse({ status: 204, description: 'Session successfully terminated' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @ApiResponse({ status: 404, description: 'Session not found' })
  @ApiResponse({ status: 500, description: 'Internal Server Error' })
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
