import { Test } from '@nestjs/testing';

import { PostPrismaService } from '../prisma/prisma.service';

class MockPostPrismaService {
  getHello(): string {
    return 'salasas!';
  }
}

describe('PostsService', () => {
  let postsService: MockPostPrismaService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        { provide: PostPrismaService, useClass: MockPostPrismaService },
      ],
    }).compile();

    postsService = moduleRef.get<MockPostPrismaService>(PostPrismaService);
  });

  describe('getHello', () => {
    it('should return "salasas!"', () => {
      const result = postsService.getHello();
      expect(result).toBe('salasas!');
    });

    it('should return a string', () => {
      const result = postsService.getHello();
      expect(typeof result).toBe('string');
    });
  });
});
