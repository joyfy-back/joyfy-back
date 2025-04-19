import { Global, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import configuration from '../configs/configuration';
import { Environments } from '../configs/env-setings';
import { getEnvFilePath } from '../configs/getEnvFilePath';
import { PostPrismaService } from '../../prisma/prisma.service';

@Global()
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
      ignoreEnvFile:
        process.env.ENV !== Environments.DEVELOPMENT &&
        process.env.ENV !== Environments.TEST,
      envFilePath: getEnvFilePath(process.env.ENV as Environments),
    }),
  ],
  providers: [
    {
      provide: PostPrismaService,
      useFactory: (config: ConfigService) => {
        const url = config.get('dbSettings', { infer: true });

        console.log(
          url.CONTENT_DATABASE_URL,
          'url.CONTENT_DATABASE_URLurl.CONTENT_DATABASE_URLurl.CONTENT_DATABASE_URL',
        );
        const prismaService = new PostPrismaService({
          url: url.CONTENT_DATABASE_URL,
        });

        return prismaService;
      },
      inject: [ConfigService],
    },
  ],
  exports: [PostPrismaService],
})
export class SharedModule {}
