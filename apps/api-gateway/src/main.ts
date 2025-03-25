import { NestFactory } from '@nestjs/core';
import * as cookieParser from 'cookie-parser';
import { ApiGatewayModule } from './api-gateway.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(ApiGatewayModule);
  const config = new DocumentBuilder()
    .setTitle('My API') // Заголовок API
    .setDescription('The API description')
    .setVersion('1.0') // Версия API
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('documentation', app, document); 
  app.setGlobalPrefix('/api/v1');
  app.use(cookieParser())
  await app.listen(process.env.port ?? 3000);
}
void bootstrap();
