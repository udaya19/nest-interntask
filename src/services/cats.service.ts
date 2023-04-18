import { Body, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Cats } from 'src/entities/cats.entity';

import { CreateCatDto } from 'src/dto/createCatDto.dto';

@Injectable()
export class CatService {
  constructor(
    @InjectRepository(Cats)
    private catsRepository: Repository<Cats>,
  ) {}
  getAllCats(): Promise<Cats[]> {
    return this.catsRepository.find();
  }
  async createCat(createCatDto) {
    this.catsRepository.create(createCatDto);
    return await this.catsRepository.save(createCatDto);
  }
}
