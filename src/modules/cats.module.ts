import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';

import { CatService } from 'src/services/cats.service';

import { CatsController } from 'src/controllers/cats.controller';

import { Cats } from 'src/entities/cats.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Cats]),
    JwtModule.register({
      secret: 'jwt_secret',
      signOptions: { expiresIn: '1d' },
    }),
  ],
  controllers: [CatsController],
  providers: [CatService],
})
export class CatsModule {}
