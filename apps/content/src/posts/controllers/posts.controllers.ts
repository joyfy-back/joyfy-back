import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { AddPostData } from '../../../../api-gateway/src/post/types/api-post-types';
import { CommandBus } from '@nestjs/cqrs';
import { AddPostCommand } from '../application/use-cases/add-post.use-case';

@Controller()
export class PostsController {
  constructor(protected commandBus: CommandBus) {}

  @MessagePattern('pattern1')
  async addPost(data: AddPostData) {
    const result = await this.commandBus.execute(new AddPostCommand(data));
    return result;
  }
}
