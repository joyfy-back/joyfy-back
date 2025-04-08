import { ConflictException, Injectable } from '@nestjs/common';
import { PrismaService } from '../../shared/prisma/prisma.service';
import { Result } from 'libs/shared/types';
import { formatErrorMessage } from '../../shared/libs/format-error-message';

@Injectable()
export class AuthQueryRepository {
  constructor(protected prisma: PrismaService) { }

  async getSessions(userId: string): Promise<Result<any>> {
    try {
      const sessions = await this.prisma.deviceSessions.findMany({
        where: {
          userId: userId,
        },
        select: {
          deviceId: true,
          ip: true,
          lastActiveDate: true,
          title: true,
        },
      });

      const mappedSessions = sessions.map((session) => ({
        ...session,
        lastActiveDate: new Date(+session.lastActiveDate * 1000).toISOString(), // Конвертируем строку в Date
      }));

      return {
        success: true,
        message: 'successful query for sessions in db',
        data: mappedSessions,
      };
    } catch (error) {
      console.error('Error fetching sessions:', error);

      return {
        success: false,
        message: formatErrorMessage(error, 'failed database query'),
        data: [],
      };
    }
  }

  async getSessionById(deviceId: string) {
    try {
      const result = await this.prisma.deviceSessions.findUnique({
        where: {
          deviceId: deviceId,
        },
      });

      if (!result) {
        return {
          success: false,
          message: 'not found',
          data: [],
        };
      }

      return {
        success: true,
        message: 'not found',
        data: [result],
      };
    } catch (error) {
      return {
        success: false,
        message: formatErrorMessage(error, 'failed database query'),
        data: [],
      };
    }
  }

  async getAccount(email: string) {
    try {
      const account = await this.prisma.account.findFirst({
        where: {
          OR: [
            {
              GithubUser: {
                email: email,
              },
            },
            {
              GooglebUser: {
                email: email,
              },
            },
          ],
        },
        include: {
          user: true,
          GithubUser: true,
          GooglebUser: true,
        },
      });

      if (!account) {
        throw new Error();
      }
      return {
        success: true,
        message:
          'successful receipt of information on accounts in the database',
        data: [account],
      };
    } catch (error) {
      return {
        success: false,
        message: '',
        data: [],
      };
    }
  }

  async getGitHubAccount(email: string) {
    const githubUser = await this.prisma.githubUser.findUnique({
      where: { email }
    });

    if (githubUser) {
      throw new ConflictException('Пользователь с таким email уже зарегистрирован через GitHub');
    }

    return githubUser;
  }
  async getGoogleAccount(email: string) {
    try {
      const githubUser = await this.prisma.googleUser.findUnique({
        where: { email }
      });

      if (githubUser) {
        throw new Error()
      }

      return {
        success: true,
        message:
          'ok',
        data: [githubUser],

      }
    } catch (error) {
      return {
        success: false,
        message:
          'Пользователь с таким email уже через GitHub',
        data: [],
      };
    }

  }
}


