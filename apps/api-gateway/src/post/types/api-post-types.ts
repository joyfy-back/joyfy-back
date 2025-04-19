import { AddPostDto } from '../dto/add-post-dto';

export type AddPostData = {
  userId: string;
  username: string;
  addPostDto: AddPostDto;
};
