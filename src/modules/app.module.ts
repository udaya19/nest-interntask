import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from '../controllers/app.controller';

import { AppService } from '../services/app.service';

import { CatsModule } from './cats.module';
import { UserModule } from './users.module';

import { Cats } from 'src/entities/cats.entity';
import { User } from 'src/entities/users.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'Udaya@2002',
      database: 'nest-crud',
      entities: [Cats, User],
      synchronize: true,
    }),
    CatsModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
