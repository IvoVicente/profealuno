import { Module } from '@nestjs/common';
import { IvoService } from './ivo.service';
import { IvoController } from './ivo.controller';

@Module({
  controllers: [IvoController],
  providers: [IvoService],
})
export class IvoModule {}
