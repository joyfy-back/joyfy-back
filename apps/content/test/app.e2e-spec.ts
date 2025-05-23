import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { ContentModule } from '../src/content.module';
import { PostPrismaService } from '../prisma/prisma.service';

describe('FilesController (e2e)', () => {
  let app: INestApplication;
  let prisma: PostPrismaService;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [ContentModule],
    }).compile();

    prisma = moduleFixture.get<PostPrismaService>(PostPrismaService);
    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('this.postsService.getHello();');
  });
});
