import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { AddPostData } from '../../../../../api-gateway/src/post/types/api-post-types';
import { AddPost } from '../../types/post-types';
import { PostRepository } from '../../infrastructure/post-repository';
import { Posts } from '../../../../prisma/generated/prisma-client-content';

export class AddPostCommand {
  constructor(public data: AddPostData) {}
}

@CommandHandler(AddPostCommand)
export class AddPostUseCase implements ICommandHandler<AddPostCommand> {
  constructor(protected postRepository: PostRepository) {}

  async execute(command: AddPostCommand): Promise<Posts> {
    const { addPostDto, username, userId } = command.data;

    const newPost: AddPost = {
      username,
      userId,
      description: addPostDto.description,
    };

    return this.postRepository.createPost(newPost);
  }
}
