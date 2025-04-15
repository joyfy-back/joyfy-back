import { NestFactory } from '@nestjs/core';
import { ContentModule } from './content.module';
import { ConfigService } from '@nestjs/config';
import { ConfigurationType } from './configs/configuration';

async function bootstrap() {
  const app = await NestFactory.create(ContentModule);
  app.setGlobalPrefix('/api/v1');

  const configService = app.get(ConfigService<ConfigurationType, true>);
  const apiSettings = configService.get('apiSettings', { infer: true });
  const dbSettings = configService.get('dbSettings', { infer: true });

  console.log(dbSettings.CONTENT_DATABASE_URL);
}

void bootstrap();
