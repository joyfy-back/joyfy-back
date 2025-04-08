import { INestApplication } from '@nestjs/common';
import { PrismaService } from 'apps/api-gateway/src/shared/prisma/prisma.service';
import * as request from 'supertest';

export class AuthTestManager {
  alphabetLower = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];

  constructor(
    protected app: INestApplication,
    protected prisma: PrismaService,
  ) {}

  async registrationUser(body: {
    username: string;
    email: string;
    password: string;
    agreeToTerms: boolean;
    passwordConfirmation: string;
  }) {
    const result = await request(this.app.getHttpServer())
      .post('/auth/registration')
      .send(body);

    console.log(result.body, 'EmailServiceEmailService');
    return result;
  }

  async registrationUsers(number: number) {
    const dataInformation = [];

    for (let i = 0; i < number; i++) {
      const dataCurrent = {
        username: `${this.alphabetLower[i]}fdgfdgd`,
        password: 'string',
        email: `${this.alphabetLower[i]}e5.kn@mail.ru`,
        agreeToTerms: true,
        passwordConfirmation: 'string',
      };

      await request(this.app.getHttpServer())
        .post('/auth/registration')
        .send(dataCurrent);

      //@ts-ignore
      dataInformation.push(dataCurrent);
    }

    return dataInformation;
  }

  async findUser(loginOrEmail: string) {
    try {
      const user = await this.prisma.user.findFirst({
        where: {
          OR: [{ username: loginOrEmail }, { email: loginOrEmail }],
        },
        include: {
          emailConfirmation: true,
        },
      });

      return user;
    } catch (error) {
      console.error('Error finding user:', error);
      return null;
    }
  }

  async login(input: { Email: string; Password: string }) {
    return await request(this.app.getHttpServer())
      .post('/auth/login')
      .send(input);
  }

  async getDevices(userId: string) {
    try {
      const sessions = await this.prisma.deviceSessions.findMany({
        where: { userId },
      });

      return sessions.map((session) => ({
        deviceId: session.deviceId,
        ip: session.ip,
        lastActiveDate: new Date(session.lastActiveDate),
        title: session.title,
      }));
    } catch (error) {
      console.error('Error getting devices:', error);
      return [];
    }
  }

  async cleanup() {
    // Очистка выполняется через PrismaService в тестах
  }
}
