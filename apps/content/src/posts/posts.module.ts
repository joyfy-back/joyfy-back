import { Module } from '@nestjs/common';
import { PostsController } from './controllers/posts.controllers';
import { AddPostUseCase } from './application/use-cases/add-post.use-case';
import { CqrsModule } from '@nestjs/cqrs';
import { PostRepository } from './infrastructure/post-repository';

@Module({
  imports: [CqrsModule],
  controllers: [PostsController],
  providers: [AddPostUseCase, PostRepository],
})
export class PostModule {}
