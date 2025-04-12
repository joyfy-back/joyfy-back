import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { ApiGatewayModule } from './../src/api-gateway.module';
import { AuthTestManager } from '../../../__tests__/utils/auth-test-manager';
import { PrismaService } from '../prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { SharedModule } from '../src/shared/shared.module';
import { EmailAdapterMock } from '../../../__tests__/mock/email.adapter.mock';
import { EmailService } from '../src/auth/application/email.service';
describe('ApiGatewayController (e2e)', () => {
  let app: INestApplication;
  let authTestManager: AuthTestManager;
  let prisma: PrismaService;
  let jwtService: JwtService;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [ApiGatewayModule, SharedModule],
    })
      .overrideProvider(EmailService)
      .useClass(EmailAdapterMock)
      .compile();

    app = moduleFixture.createNestApplication();
    await app.init();

    prisma = moduleFixture.get<PrismaService>(PrismaService);
    jwtService = moduleFixture.get<JwtService>(JwtService);
    authTestManager = new AuthTestManager(app, prisma);
    await prisma.cleanDatabase();
  });

  afterEach(async () => {
    await prisma.cleanDatabase();
  });

  afterAll(async () => {
    await app.close();
  });

  describe('Registration', () => {
    it('should register user (POST /auth/registration)', async () => {
      const userData = {
        username: 'testuser',
        email: 'test@example.com',
        password: 'Password123!',
        agreeToTerms: true,
        passwordConfirmation: 'Password123!',
      };

      const result = await request(app.getHttpServer())
        .post('/auth/registration')
        .send(userData)
        .expect(201);

      expect(result.body).toEqual({
        message: `We have sent a link to confirm your email to ${userData.email}`,
      });
    });

    it('should return 400 if email already registered', async () => {
      const userData = {
        username: 'testuser',
        email: 'test@example.com',
        password: 'Password123!',
        agreeToTerms: true,
        passwordConfirmation: 'Password123!',
      };

      // First registration
      await request(app.getHttpServer())
        .post('/auth/registration')
        .send(userData)
        .expect(201);

      // Second attempt
      await request(app.getHttpServer())
        .post('/auth/registration')
        .send(userData)
        .expect(400);
    });
  });

  describe('Login', () => {
    it('should login user (POST /auth/login)', async () => {
      const userData = {
        username: 'testuser',
        email: 'test@example.com',
        password: 'Password123!',
        agreeToTerms: true,
        passwordConfirmation: 'Password123!',
      };

      await authTestManager.registrationUser(userData);

     const response = await request(app.getHttpServer())
        .post('/auth/login')
        .send({
          email: userData.email,
          password: userData.password,
        })
        .expect(200);

      
      expect(response.headers['set-cookie']).toBeDefined();
    });

    it('should return 401 with invalid credentials', async () => {
      await request(app.getHttpServer())
        .post('/auth/login')
        .send({
          Email: 'nonexistent@example.com',
          Password: 'wrongpassword',
        })
        .expect(401);
    });
  });
});
