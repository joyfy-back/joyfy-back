import { NestFactory } from '@nestjs/core';
import * as cookieParser from 'cookie-parser';
import { ApiGatewayModule } from './api-gateway.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';
import { ConfigurationType } from './configs/configuration';

async function bootstrap() {
  const app = await NestFactory.create(ApiGatewayModule);
  const config = new DocumentBuilder()
    .setTitle('My API') // Заголовок API
    .setDescription('The API description')
    .setVersion('1.0') // Версия API
    .addBearerAuth()
    .build();

  app.enableCors({
    origin: '*',  
    methods: 'GET,POST,PUT,DELETE',
    allowedHeaders: 'Content-Type,Authorization',
  });

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('documentation', app, document);

  const configService = app.get(ConfigService<ConfigurationType, true>);
  const apiSettings = configService.get('apiSettings', { infer: true });

  app.setGlobalPrefix('/api/v1');
  app.use(cookieParser());

  await app.listen(apiSettings.PORT ?? 3000);
}
void bootstrap();
