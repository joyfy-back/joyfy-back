import { NestFactory } from '@nestjs/core';
import * as cookieParser from 'cookie-parser';
import { ApiGatewayModule } from './api-gateway.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';
import { ConfigurationType } from './configs/configuration';
import {
  SWAGGER_DESCRIPTION,
  SWAGGER_SERVER,
  SWAGGER_TITLE,
} from './shared/constants/swagger';

async function bootstrap() {
  const app = await NestFactory.create(ApiGatewayModule);

  const allowedOrigins = ['http://localhost:3000', 'https://joyfy.online'];

  app.enableCors({
    origin: (
      origin: string | undefined,
      callback: (error: Error | null, origin?: string | boolean) => void,
    ) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, origin);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
    credentials: true,
  });

  const config = new DocumentBuilder()
    .setTitle(SWAGGER_TITLE)
    .setDescription(SWAGGER_DESCRIPTION)
    .setVersion('1.0')
    .addServer(SWAGGER_SERVER)
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
