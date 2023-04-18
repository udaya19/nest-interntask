import { Module } from '@nestjs/common';

import { CatService } from 'src/services/cats.service';

import { CatsController } from 'src/controllers/cats.controller';

@Module({
  imports: [],
  controllers: [CatsController],
  providers: [CatService],
})
export class CatsModule {}
