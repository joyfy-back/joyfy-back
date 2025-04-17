import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { AddPostData } from '../../../../api-gateway/src/post/types/api-post-types';
import { CommandBus } from '@nestjs/cqrs';
import { AddPostCommand } from '../application/use-cases/add-post.use-case';
import { Posts } from '../../../prisma/generated/prisma-client-content';

@Controller()
export class PostsController {
  constructor(protected commandBus: CommandBus) {}

  @MessagePattern('pattern1')
  async addPost(data: AddPostData): Promise<Posts> {
    return this.commandBus.execute(new AddPostCommand(data));
  }
}
