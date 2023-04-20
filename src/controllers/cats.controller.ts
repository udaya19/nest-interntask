import {
  Controller,
  Get,
  Post,
  Res,
  HttpStatus,
  Body,
  Param,
  UseGuards,
  Request,
} from '@nestjs/common';
import { Response } from 'express';

import { CatService } from 'src/services/cats.service';

import { CreateCatDto } from 'src/dto/createCatDto.dto';
import { AuthGaurd } from 'src/authGuard/auth.guard';

@Controller('cats')
export class CatsController {
  constructor(private readonly catService: CatService) {}

  @Get()
  async getHello() {
    return await this.catService.getAllCats();
  }

  @UseGuards(AuthGaurd)
  @Post('/new')
  async addCat(
    @Res() res: Response,
    @Body() createCatDto: CreateCatDto,
    @Request() req,
  ) {
    const { user } = req;
    if (user.isAdmin) {
      const newCat = await this.catService.createCat(createCatDto);
      return res.status(HttpStatus.CREATED).json({ cats: newCat, user });
    } else {
      return res
        .status(HttpStatus.UNAUTHORIZED)
        .json({ error: 'Unauthorized access' });
    }
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
