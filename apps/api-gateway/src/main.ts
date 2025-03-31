import { NestFactory } from '@nestjs/core';
import * as cookieParser from 'cookie-parser';
import { ApiGatewayModule } from './api-gateway.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';
import { ConfigurationType } from './configs/configuration';

async function bootstrap() {
  const app = await NestFactory.create(ApiGatewayModule);
  app.enableCors({
    origin: '*',
    methods: 'GET,POST,PUT,DELETE,OPTIONS',
    allowedHeaders: 'Content-Type,Authorization,X-Requested-With',
    credentials: true,
  });

  const config = new DocumentBuilder()
    .setTitle('My API')
    .setDescription('The API description')
    .setVersion('1.0')
    .addServer('https://gateway.joyfy.online/api/v1')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/v1/swagger', app, document, {
    customCssUrl:
      'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui.min.css',
    customJs: [
      'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui-bundle.js',
      'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui-standalone-preset.js',
    ],
    swaggerOptions: {
      url: '/api/v1/swagger-json',
      persistAuthorization: true,
    },
  });

  const configService = app.get(ConfigService<ConfigurationType, true>);
  const apiSettings = configService.get('apiSettings', { infer: true });

  app.setGlobalPrefix('/api/v1');
  app.use(cookieParser());

  await app.listen(apiSettings.PORT ?? 3000);
}
void bootstrap();
