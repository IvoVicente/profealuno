import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SuzyModule } from './suzy/suzy.module';

@Module({
  imports: [SuzyModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
