import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { AppService } from './services/app.service';
import { EncodeController } from './controllers/encode.controller';

@Module({
  imports: [],
  controllers: [AppController, EncodeController],
  providers: [AppService],
})
export class AppModule {}
