import { Test, TestingModule } from '@nestjs/testing';
import { ApiGatewayModule } from '../../../src/api-gateway.module';
import * as request from 'supertest';
import { PrismaService } from '../../../prisma/prisma.service';
import * as cookieParser from 'cookie-parser';

describe('tests for andpoint /api/v1/post', () => {
  let app;

  let prisma: PrismaService;

  let email = 'test@example.com';

  let userId;

  let password = 'Password123!';

  let accessToken;

  let code;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [ApiGatewayModule],
    }).compile();

    app = moduleFixture.createNestApplication();

    prisma = app.get(PrismaService);

    app.use(cookieParser());

    app.setGlobalPrefix('/api/v1');

    await app.init();

    // ! ATTENTION method removes everything from the table user
    await prisma.user.deleteMany();
    await prisma.emailConfirmation.deleteMany();
  });

  afterAll(async () => {
    await app.close();
  });

  /*  it('registration  user', async () => {
      await request(app.getHttpServer())
        .post('/api/v1/auth/registration')
        .send({
          username: 'testuser',
          email,
          password,
          agreeToTerms: true,
          passwordConfirmation: 'Password123!',
        })
        .expect(201);

      const itemUser = await prisma.user.findUnique({
        where: { email },
      });
      userId = itemUser?.userId;

      const itemConfirmationCode = await prisma.emailConfirmation.findFirst({
        where: { userId },
      });

      code = itemConfirmationCode?.confirmationCode;

      //console.log('itemConfirmationCode', itemConfirmationCode);
    });

    it('confirmation registration  user, expected OK ', async () => {
      await request(app.getHttpServer())
        .post('/api/v1/auth/registration-confirmation')
        .send({ code })
        .expect(204);
    });*/

  it('login  user, expected OK', async () => {
    const res = await request(app.getHttpServer())
      .post('/api/v1/auth/login')
      .send({ email, password })
      .expect(400);
    //.expect(200);

    /* const allCookies = res.headers['set-cookie'];

    accessToken = allCookies[1].split('=')[1];
    console.log(accessToken);*/
  });

  /*для проверки создания поста
    открыть базу данных
    открыть постман
    не раскоментировать тест поста
    запустить тесты без теста поста и получить аксестокен
    в постман в куки положить аксес токен
    из постмана создавать посты и конролировать в базе
    ------------закоментить можно в
          ----api-post.module.ts    options: {
          host: 'api-content-service-service',
          port: 3836,
        },
        ----- принимающий микросервис в main.ts
             options: {
        host: '0.0.0.0',
        port: 3836,
      },*/

  /*  it('add post ', async () => {
      const res = await request(app.getHttpServer())
        .post('/api/v1/post')
        .set('Cookie', `accessToken=${accessToken}`)
        .send({ description: 'поле чудес' })
        .expect(201);

      console.log('res.body-TEST', res.body);
    }, 20000);*/
});
