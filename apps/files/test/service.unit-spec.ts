import { Test } from '@nestjs/testing';
import { FilesService } from '../src/files.service';
describe('PostsService', () => {
  let postsService: FilesService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [FilesService],
    }).compile();

    postsService = moduleRef.get<FilesService>(FilesService);
  });

  describe('getHello', () => {
    it('should return "Hello WorldFile!"', () => {
      const result = postsService.getHello();
      expect(result).toBe('Hello WorldFile!');
    });

    it('should return a string', () => {
      const result = postsService.getHello();
      expect(typeof result).toBe('string');
    });
  });
});
