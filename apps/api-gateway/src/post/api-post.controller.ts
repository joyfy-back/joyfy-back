import { Controller, Get, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Controller('post')
export class ApiPostController {
  constructor(@Inject('API_POST_SERVICE') private client: ClientProxy) {}

  /*  @Get()
    send() {
      const obj = { one: 5 };
      const pattern = 'pattern1';
      console.log('one step', obj);
  
      const result = this.client.send(pattern, obj);
      console.log('two step', result);
  
      return result;
    }
  }*/

  @Get()
  async send() {
    const obj = { one: 5 };
    const pattern = 'pattern1';
    console.log('one step', obj);

    const result = await this.client.send(pattern, obj);
    console.log('two step', result);

    return result;
  }
}
