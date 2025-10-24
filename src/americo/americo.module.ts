import { Module } from '@nestjs/common';
import { AmericoService } from './americo.service';
import { AmericoController } from './americo.controller';

@Module({
  controllers: [AmericoController],
  providers: [AmericoService],
})
export class AmericoModule {}
