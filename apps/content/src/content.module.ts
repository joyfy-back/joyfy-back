import { Module } from '@nestjs/common';

import { SharedModule } from './shared/shared.module';
import { ContentController } from './content.controller';
import { ContentService } from './content.service';
import { PostModule } from './posts/posts.module';
import { PostRepository } from './posts/infrastructure/post-repository';

@Module({
  imports: [SharedModule, PostModule],
  controllers: [ContentController],
  providers: [ContentService, PostRepository],
})
export class ContentModule {}
