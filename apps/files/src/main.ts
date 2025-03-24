import { NestFactory } from '@nestjs/core';
import { FilesModule } from './files.module';

async function bootstrap() {
  const app = await NestFactory.create(FilesModule);
  app.setGlobalPrefix('/api/v2');
  await app.listen(process.env.port ?? 3000);
}

void bootstrap();
