import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ApiPostController } from './api-post.controller';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'CONTENT-POST-SERVICE',
        transport: Transport.TCP,
        /*  options: {
        host: 'api-content-service-service',
        port: 3836,
      },*/
      },
    ]),
  ],
  controllers: [ApiPostController],
  providers: [],
  exports: [],
})
export class ApiPostModule {}
