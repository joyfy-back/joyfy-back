import { Controller, Get, Post } from "@nestjs/common";
import { PrismaService } from "../../../prisma/prisma.service"



@Controller('posts')
export class PostsController {
  constructor(private prisma: PrismaService) { }

  @Get()
  getHello(): string {
    return 'this.postsService.getHello();'
  }
  @Get('/comments')
  async  getloo() {
    return await this.prisma.comment.findUnique({
      where: { commetId: '1b9d6bcd-bbfd-4b2d-9b5d-ab8hlbbd4bed' }
    });
  }
  @Post('/photo')
  async  addPhoto() {
   return 'zalipa'
  }
}
