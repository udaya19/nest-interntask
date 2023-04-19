import { Body, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Cats } from 'src/entities/cats.entity';

@Injectable()
export class CatService {
  constructor(
    @InjectRepository(Cats)
    private catsRepository: Repository<Cats>,
  ) {}
  async getAllCats() {
    return await this.catsRepository.find();
  }
  async createCat(createCatDto) {
    this.catsRepository.create(createCatDto);
    return await this.catsRepository.save(createCatDto);
  }
  async getCatById(id: number) {
    return await this.catsRepository.findOneBy({ id });
  }
}
