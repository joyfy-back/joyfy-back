import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from './generated/prisma-client-content';

@Injectable()
export class PostPrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  constructor(options?: { url?: string }) {
    super({
      datasources: {
        db: {
          url: options?.url,
        },
      },
    });
  }

  async onModuleInit() {
    await this.$connect();
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}
