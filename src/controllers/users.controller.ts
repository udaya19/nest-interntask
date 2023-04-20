import { Body, Controller, Post, Get } from '@nestjs/common';

import { CreateUserDto } from 'src/dto/createUserDto.dto';

import { UserService } from 'src/services/users.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  async getAllUsers() {
    return await this.userService.getUser();
  }
  @Post('/new')
  async create(@Body() createUserDto: CreateUserDto) {
    return await this.userService.addUser(createUserDto);
  }
}
