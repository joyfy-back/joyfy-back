import { NestFactory } from '@nestjs/core';
import { PostsModule } from './posts.module';

async function bootstrap() {
  const app = await NestFactory.create(PostsModule);
  app.setGlobalPrefix('/api/v1');
  await app.listen(process.env.port ?? 3000);
}

void bootstrap();
