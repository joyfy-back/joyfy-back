import { applyDecorators } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiBody,
  ApiOperation,
  ApiResponse,
} from '@nestjs/swagger';
import { AddPostDto } from '../dto/add-post-dto';

export function SwaggerAddPost() {
  return applyDecorators(
    ApiOperation({
      summary:
        'Создание нового поста. ... на данный момент без добавления картинки. ' +
        'Для доступа к этому эндпоинту необходим accessToken в cookies ',
    }),
    ApiBody({ type: AddPostDto }),
    ApiResponse({
      status: 201,
      schema: {
        type: 'object',
        properties: {
          postId: {
            type: 'string',
            description: 'Идентификатор поста',
          },
          username: {
            type: 'string',
            description: 'Имя создателя поста',
          },
          userId: {
            type: 'string',
            description: 'Идентификатор создателя поста',
          },
          description: {
            type: 'string',
            description: 'Описание от  создателя поста',
          },
          createdAt: {
            type: 'string',
            description: 'Дата создания поста',
          },
          updatedAt: {
            type: 'string',
            description: 'Дата изменения поста',
          },
        },
        required: [
          'postId',
          'username',
          'userId',
          'description',
          'createdAt',
          'updatedAt',
        ],
      },
      description: 'Создан новый пост. Не благодорите.',
    }),
    ApiResponse({
      status: 401,
      description:
        'Unauthorized : accessToken невалидный или не передан в cookies',
    }),
    ApiBearerAuth(),
  );
}
