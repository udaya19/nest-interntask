import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Cats } from 'src/entities/cats.entity';

@Injectable()
export class CatService {
  constructor(
    @InjectRepository(Cats)
    private catsRepository: Repository<Cats>,
  ) {}
  getAllCats(): Promise<Cats[]> {
    return this.catsRepository.find();
  }
}
