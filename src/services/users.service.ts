import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { User } from 'src/entities/users.entity';

import { CreateUserDto } from 'src/dto/createUserDto.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async getUser() {
    return await this.userRepository.find();
  }

  async addUser(createUserDto: CreateUserDto) {
    const user = await this.userRepository.findOneBy({
      email: createUserDto.email,
    });
    if (user) {
      return null;
    } else {
      this.userRepository.create(createUserDto);
      return await this.userRepository.save(createUserDto);
    }
  }
}
