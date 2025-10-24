import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SuzyModule } from './suzy/suzy.module';
import { AmericoModule } from './americo/americo.module';

@Module({
  imports: [SuzyModule, AmericoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
