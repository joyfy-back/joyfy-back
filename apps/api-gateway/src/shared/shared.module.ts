import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { CqrsModule } from '@nestjs/cqrs';

@Global()
@Module({
  imports: [],
  providers: [PrismaService],
  exports: [PrismaService],
})
export class SharedModule {}
