import { Module } from '@nestjs/common';
import { PostsController } from './controllers/posts.controllers';
import { PostsService } from './application/posts.service';



@Module({
  imports: [],
  controllers: [PostsController],
  providers: [PostsService],
})
export class PostModule {}
