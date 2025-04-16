import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Inject,
  Post,
  Request,
  Res,
  UseGuards,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { JwtAuthGuard } from '../auth/strategy/jwt.strategy';
import { Response } from 'express';
import { AddPostDto } from './dto/add-post-dto';
import { lastValueFrom } from 'rxjs';
import { AddPostData } from './types/api-post-types';

@Controller('post')
export class ApiPostController {
  constructor(@Inject('CONTENT-POST-SERVICE') private client: ClientProxy) {}

  @UseGuards(JwtAuthGuard)
  @HttpCode(HttpStatus.CREATED)
  @Post()
  async apiAddPost(
    @Res() res: Response,
    @Body() addPostDto: AddPostDto,
    @Request() req,
  ) {
    const pattern = 'pattern1';

    const { userId, username } = req.user;

    const data: AddPostData = { userId, username, addPostDto };

    const result = await lastValueFrom(this.client.send(pattern, data));

    return res.json(result);
  }
}
