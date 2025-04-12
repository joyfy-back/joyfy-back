import { Global, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import configuration from '../configs/configuration';
import { Environments } from '../configs/env-setings';
import { getEnvFilePath } from '../configs/getEnvFilePath';
import { PrismaService } from "../../prisma/prisma.service"

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
      provide: PrismaService,
      useFactory: (config: ConfigService) => {
        const url = config.get('dbSettings', { infer: true });

        const prismaService = new PrismaService({
          url: url.DATABASE_URL,
        });

        return prismaService;
      },
      inject: [ConfigService],
    },
  ],
  exports: [PrismaService],
})
export class SharedModule {}
