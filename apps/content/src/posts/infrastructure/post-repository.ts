import { Injectable } from '@nestjs/common';
import { PostPrismaService } from '../../../prisma/prisma.service';
import { AddPost } from '../types/post-types';
import { Posts } from '../../../prisma/generated/prisma-client-content';

@Injectable()
export class PostRepository {
  constructor(protected prisma: PostPrismaService) {}

  async createPost(newPost: AddPost): Promise<Posts> {
    return this.prisma.posts.create({
      data: { ...newPost },
    });
  }
}
