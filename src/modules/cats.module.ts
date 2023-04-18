import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CatService } from 'src/services/cats.service';

import { CatsController } from 'src/controllers/cats.controller';

import { Cats } from 'src/entities/cats.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Cats])],
  controllers: [CatsController],
  providers: [CatService],
})
export class CatsModule {}
