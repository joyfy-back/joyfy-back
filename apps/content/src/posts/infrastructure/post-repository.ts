import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../../api-gateway/prisma/prisma.service';
import { AddPost } from '../types/post-types';
import { Posts } from '../../../prisma/generated/prisma-client-content';

@Injectable()
export class PostRepository {
  constructor(protected prisma: PrismaService) {}

  async createPost(newPost: AddPost): Promise<Posts> {
    return await this.prisma.posts.create({
      data: { ...newPost },
    });
  }
}

/*
async registrationUser(newUser: User): Promise<User> {
  return await this.prisma.user.create({
    data: { ...newUser },
  });
}*/
