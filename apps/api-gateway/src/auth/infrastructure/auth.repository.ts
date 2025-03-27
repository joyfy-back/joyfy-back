import { Injectable } from '@nestjs/common';
import { Result } from '@libs/shared/types';
import { DeviceSessions, User } from '@prisma/client';
import { EmailConfirmationWithUser, UserType } from '../type/auth.type';
import { PrismaService } from '../../shared/prisma/prisma.service';
import { formatErrorMessage } from '../../shared/libs/format-error-message';

@Injectable()
export class AuthRepository {
  constructor(protected prisma: PrismaService) {}

  async createUser(dto: UserType): Promise<Result<User>> {
    try {
      const user = await this.prisma.user.create({
        data: {
          username: dto.username,
          email: dto.email,
          passwordHash: dto.passwordHash,
          agreeToTerms: dto.agreeToTerms,
          emailConfirmation: {
            create: {
              confirmationCode: dto.emailConfirmation.confirmationCode,
              expirationDate: dto.emailConfirmation.expirationDate,
              isConfirmed: dto.emailConfirmation.isConfirmed,
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
        data: [user],
      };
    } catch (error) {
      console.log(error);
      return {
        success: false,
        message: 'failed to create user in db',
        data: [],
      };
    }
  }

  async findUserByConfirmEmail(
    code: string,
  ): Promise<Result<EmailConfirmationWithUser>> {
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
        throw new Error();
      }

      return {
        success: true,
        message: 'confirmation code is correct',
        data: [emailConfirmation],
      };
    } catch (error) {
      console.log(error);
      return {
        success: false,
        message: 'confirmation code is incorrect',
        data: [],
      };
    }
  }

  async updateConfirmation(userId: string): Promise<Result<never>> {
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
        throw new Error();
      }

      return {
        success: true,
        message: 'mail confirmed',
        data: [],
      };
    } catch (error) {
      const message = 'Mail is not confirmed';

      return {
        success: false,
        message: formatErrorMessage(error, message),
        data: [],
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
      console.log(error);
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
      console.log(error);
      return {
        success: false,
        message: 'An error occurred while searching for the user',
        data: [],
      };
    }
  }

  async addSessionUser(inputModul: DeviceSessions): Promise<Result<never>> {
    try {
      await this.prisma.deviceSessions.create({
        data: {
          deviceId: inputModul.deviceId,
          ip: inputModul.ip,
          lastActiveDate: inputModul.lastActiveDate.toString(),
          title: inputModul.title,
          userId: inputModul.userId,
        },
      });

      return {
        success: true,
        message: 'session in the database recorded',
        data: [],
      };
    } catch (error) {
      console.log(error);
      return {
        success: false,
        message: 'error writing to db session',
        data: [],
      };
    }
  }

  async findRottenSessions(
    userId: string,
    deviceId: string,
  ): Promise<Result<DeviceSessions>> {
    try {
      const session = await this.prisma.deviceSessions.findFirst({
        where: {
          deviceId: deviceId,
          userId: userId,
        },
      });

      if (!session) {
        return {
          success: false,
          message: 'session not found',
          data: [],
        };
      }

      return {
        success: true,
        message: 'there is a session',
        data: [session],
      };
    } catch (error) {
      console.log(error);
      return {
        success: false,
        message: 'error searching for session in db',
        data: [],
      };
    }
  }

  async completelyRemoveSession(
    deviceId: string,
    userId: string,
  ): Promise<Result<never>> {
    try {
      await this.prisma.deviceSessions.delete({
        where: {
          deviceId: deviceId,
          userId: userId,
        },
      });

      return {
        success: true,
        data: [],
        message: 'successful removal',
      };
    } catch (error) {
      console.log(error, 'dfdfdfd');
      return {
        success: false,
        data: [],
        message: 'error while deleting',
      };
    }
  }

  async updateSession(
    iat: string,
    userId: string,
    deviceId: string,
  ): Promise<Result<never>> {
    try {
      await this.prisma.deviceSessions.update({
        where: {
          deviceId: deviceId, // Ищем запись по старому deviceId
        },
        data: {
          lastActiveDate: iat, // Обновляем deviceId
        },
      });

      return {
        success: true,
        message: 'successful update Session ',
        data: [],
      };
    } catch (error) {
      return {
        success: false,
        message: 'error during update',
        data: [],
      };
    }
  }

  async findBlogOrEmail(userOrEmail: string): Promise<Result<User>> {
    try {
      const user = await this.prisma.user.findFirst({
        where: {
          OR: [{ username: userOrEmail }, { email: userOrEmail }],
        },
        include: {
          emailConfirmation: true,
        },
      });

      if (!user) {
        throw new Error();
      }

      return {
        success: true,
        message: 'there is a user with such email',
        data: [user],
      };
    } catch (error) {
      console.error(error);
      return {
        success: false,
        message: 'no such user by email',
        data: [],
      };
    }
  }

  async updateCodeUserByConfirmEmail(
    userID: string,
    code: string,
  ): Promise<Result> {
    try {
      const result = await this.prisma.emailConfirmation.updateMany({
        where: {
          userId: userID, // Фильтруем по userId
        },
        data: {
          confirmationCode: code, // Устанавливаем новое значение confirmationCode
        },
      });

      if (result.count === 0) {
        throw new Error();
      }

      return {
        success: true,
        message: 'successful setting of new confirmationCode value',
        data: [],
      };
    } catch (error) {
      return {
        success: false,
        message: 'error about update',
        data: [],
      };
    }
  }

  async postPasswordRecoveryCode(code: string, email: string): Promise<Result<never>> {
    try {
      await this.prisma.recoveryPassword.create({
        data: {
          code: code,
          email: email,
        },
      });

      return {
        success: true,
        message: 'successful creation',
        data: [],
      };
    } catch (error) {
      return {
        success: false,
        data: [],
        message: 'error creating',
      };
    }
  }

  async checkPasswordRecoveryCode(code: string): Promise<Result<any>> {
    try {
      const result = await this.prisma.recoveryPassword.findFirst({
        where: { code: code },
      });

      return {
        success: true,
        message: '',
        data: [result],
      };
    } catch (error) {
      console.error('Error finding recovery password record:', error);
      return {
        success: false,
        message: '',
        data: [],
      };
    }
  }

  async updatePassword(email: string, newPasswordHash: string) {
    try {
      const result = await this.prisma.user.updateMany({
        where: { email: email },
        data: {
          passwordHash: newPasswordHash,
        },
      });

      if (result.count > 0) {
        return {
          success: true,
          message: 'Password updated successfully',
          data: [result],
        };
      } else {
        return {
          success: false,
          message: 'User not found',
          data: [],
        };
      }
    } catch (error) {
      console.error('Error updating password:', error);
      return {
        success: false,
        message: 'Failed to update password',
        data: [],
      };
    }
  }
}
