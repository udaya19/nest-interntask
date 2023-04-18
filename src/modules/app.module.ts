import { Module } from '@nestjs/common';

import { AppController } from '../controllers/app.controller';

import { AppService } from '../services/app.service';

import { CatsModule } from './cats.module';

@Module({
  imports: [CatsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
