import { Controller, Get } from '@nestjs/common';

@Controller()
export class ContentController {
  constructor() {}

  @Get()
  getHello(): string {
    return 'this.postsService.getHello();'
  }
}
