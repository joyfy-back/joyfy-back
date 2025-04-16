import { NestFactory } from '@nestjs/core';
import { ContentModule } from './content.module';
import { ConfigService } from '@nestjs/config';
import { ConfigurationType } from './configs/configuration';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    ContentModule,
    {
      transport: Transport.TCP,
      options:{
        host: '0.0.0.0',
        port: 3836
      }
    },
  );

  const configService = app.get(ConfigService<ConfigurationType, true>);
  const dbSettings = configService.get('dbSettings', { infer: true });

  console.log(dbSettings.CONTENT_DATABASE_URL);
  await app.listen();
}

void bootstrap();
