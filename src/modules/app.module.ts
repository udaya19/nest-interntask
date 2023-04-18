import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from '../controllers/app.controller';

import { AppService } from '../services/app.service';

import { CatsModule } from './cats.module';

import { Cats } from 'src/entities/cats.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'Udaya@2002',
      database: 'nest-crud',
      entities: [Cats],
      synchronize: true,
    }),
    CatsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
