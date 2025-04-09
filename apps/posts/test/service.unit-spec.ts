import { Test } from '@nestjs/testing';
import { PostsService } from '../src/posts.service';

describe('PostsService', () => {
  let postsService: PostsService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [PostsService],
    }).compile();

    postsService = moduleRef.get<PostsService>(PostsService);
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