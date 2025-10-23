import { Module } from '@nestjs/common';
import { SuzyService } from './suzy.service';
import { SuzyController } from './suzy.controller';

@Module({
  controllers: [SuzyController],
  providers: [SuzyService],
})
export class SuzyModule {}
