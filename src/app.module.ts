import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RosbonModule } from './rosbon/rosbon.module';

@Module({
  imports: [RosbonModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
