import { Body, Controller, Post, Get, Res } from '@nestjs/common';
import { Response } from 'express';

import { CreateUserDto } from 'src/dto/createUserDto.dto';
import { User } from 'src/entities/users.entity';

import { UserService } from 'src/services/users.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  async getAllUsers() {
    return await this.userService.getUser();
  }
  @Post('/new')
  async create(
    @Body() createUserDto: CreateUserDto,
    @Res() res: Response,
  ): Promise<Response<User>> {
    const newUser = await this.userService.addUser(createUserDto);
    if (!newUser) {
      return res.json({ error: 'error' });
    } else {
      return res.json({ newUser });
    }
  }
}
