import { Module } from '@nestjs/common';
import { PostsController } from './controllers/posts.controllers';
import { AddPostUseCase } from './application/use-cases/add-post.use-case';
import { CqrsModule } from '@nestjs/cqrs';

@Module({
  imports: [CqrsModule],
  controllers: [PostsController],
  providers: [AddPostUseCase],
})
export class PostModule {}
