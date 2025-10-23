import { Module } from '@nestjs/common';
import { RosbonService } from './rosbon.service';
import { RosbonController } from './rosbon.controller';

@Module({
  controllers: [RosbonController],
  providers: [RosbonService],
})
export class RosbonModule {}
