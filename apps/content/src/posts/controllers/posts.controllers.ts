import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class PostsController {
  constructor() {}

  /*  @MessagePattern('pattern1')
  method(data: { one: number }) {
    data.one = data.one + 100000;
    console.log('three step OR SECOND MICROCERVISE');
    return data;
  }*/

  @MessagePattern('pattern1')
  async method(data: { one: number }) {

    console.log('three step OR SECOND MICROCERVISE');
    return { ok: 12345678 };
  }
}
