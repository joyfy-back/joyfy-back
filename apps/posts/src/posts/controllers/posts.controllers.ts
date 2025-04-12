import { Controller, Get } from "@nestjs/common";
import { PrismaService } from "../../../prisma/prisma.service"



@Controller('posts')
export class PostsController {
  constructor(private prisma: PrismaService) { }

  @Get()
  getHello(): string {
    return 'this.postsService.getHello();'
  }
  @Get('/app')
  getlo(): Promise<{ postId: string; username: string; createdAt: Date; updatedAt: Date } | null> {
    return this.prisma.posts.findUnique({
      where: { postId: '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed' }
    });
  }

  @Get('/comments')
  async  getloo() {
    return await this.prisma.comment.findUnique({
      where: { commetId: '1b9d6bcd-bbfd-4b2d-9b5d-ab8hlbbd4bed' }
    });
  }
}
