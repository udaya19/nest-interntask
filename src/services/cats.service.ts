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
  createCat(createCatDto) {
    this.catsRepository.create(createCatDto);
    return this.catsRepository.save(createCatDto);
  }
}
