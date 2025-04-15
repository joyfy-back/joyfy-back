import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ApiPostController } from './api-post.controller';

@Module({
  imports: [
    ClientsModule.register([
      { name: 'API_POST_SERVICE', transport: Transport.TCP },
    ]),
  ],
  controllers: [ApiPostController],
  providers: [],
  exports: [],
})
export class ApiPostModule {}
