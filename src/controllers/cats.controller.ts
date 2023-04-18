import { Controller, Get } from '@nestjs/common';

import { CatService } from 'src/services/cats.service';

import { Cats } from 'src/entities/cats.entity';

@Controller('cats')
export class CatsController {
  constructor(private readonly catService: CatService) {}

  @Get()
  getHello(): Promise<Cats[]> {
    return this.catService.getAllCats();
  }
}
