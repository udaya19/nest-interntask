import {
  Controller,
  Get,
  Post,
  Res,
  HttpStatus,
  Body,
  Param,
} from '@nestjs/common';
import { Response } from 'express';

import { CatService } from 'src/services/cats.service';

import { Cats } from 'src/entities/cats.entity';

import { CreateCatDto } from 'src/dto/createCatDto.dto';

@Controller('cats')
export class CatsController {
  constructor(private readonly catService: CatService) {}

  @Get()
  async getHello() {
    return await this.catService.getAllCats();
  }

  @Post('/new')
  async addCat(@Res() res: Response, @Body() createCatDto: CreateCatDto) {
    const newCat = await this.catService.createCat(createCatDto);
    return res.status(HttpStatus.CREATED).json({ cats: newCat });
  }

  @Get('/:id')
  async getCatById(@Res() res: Response, @Param() params: any) {
    const cat = await this.catService.getCatById(params.id);
    if (cat) {
      return res.json({ cat });
    } else {
      return res.status(HttpStatus.NOT_FOUND).json({ error: 'Not found' });
    }
  }
}
