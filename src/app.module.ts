import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IvoModule } from './ivo/ivo.module';

@Module({
  imports: [IvoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
