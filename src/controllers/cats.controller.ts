import { Controller, Get, Post, Res, HttpStatus, Body } from '@nestjs/common';
import { Response } from 'express';

import { CatService } from 'src/services/cats.service';

import { Cats } from 'src/entities/cats.entity';

import { CreateCatDto } from 'src/dto/createCatDto.dto';

@Controller('cats')
export class CatsController {
  constructor(private readonly catService: CatService) {}

  @Get()
  getHello(): Promise<Cats[]> {
    return this.catService.getAllCats();
  }

  @Post('/new')
  addCat(@Res() res: Response, @Body() createCatDto: CreateCatDto) {
    const newCat = this.catService.createCat(createCatDto);
    return res.status(HttpStatus.CREATED).json({ cats: newCat });
  }
}
