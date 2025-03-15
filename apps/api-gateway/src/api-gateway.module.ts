import { Module } from '@nestjs/common';
import { ApiGatewayController } from './api-gateway.controller';
import { ApiGatewayService } from './api-gateway.service';
import { AuthModule } from './auth/auth.module';
import { SharedModule } from './shared/shared.module';

@Module({
  imports: [SharedModule, AuthModule],
  controllers: [ApiGatewayController],
  providers: [ApiGatewayService],
  exports: [],

})
export class ApiGatewayModule { }
