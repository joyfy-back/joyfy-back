import { Controller, Get } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PrismaClient } from '@prisma/client';
import { get } from 'http';

@Controller()
export class PostsController {
  constructor(private readonly postsService: PostsService, private prisma: PrismaClient) { }

  @Get()
  getHello(): string {
    return this.postsService.getHello();
  }
  @Get('/app')
  getlo(): Promise<{ postId: string; username: string; createdAt: Date; updatedAt: Date } | null> {
    return this.prisma.posts.findUnique({
      where: { postId: '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed' }
    });
  }
}
