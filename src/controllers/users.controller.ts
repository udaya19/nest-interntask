import {
  Body,
  Controller,
  Post,
  Get,
  Res,
  Request,
  UseGuards,
} from '@nestjs/common';
import { Response } from 'express';

import { CreateUserDto } from 'src/dto/createUserDto.dto';
import { SignInUserDto } from 'src/dto/signInUserDto.dto';

import { User } from 'src/entities/users.entity';

import { UserService } from 'src/services/users.service';

import { AuthGaurd } from '../authGuard/auth.guard';

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
  @Post('/login')
  async login(@Body() signInUser: SignInUserDto, @Res() res: Response) {
    const user = await this.userService.signInUser(
      signInUser.email,
      signInUser.password,
    );
    if (user) {
      return res.json({ user });
    } else {
      return res.json({ error: user });
    }
  }

  @UseGuards(AuthGaurd)
  @Get('/profile')
  async getProfile(@Request() req) {
    return req.user;
  }
}
