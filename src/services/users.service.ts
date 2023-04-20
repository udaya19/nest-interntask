import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { User } from 'src/entities/users.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async getUser() {
    return await this.userRepository.find();
  }

  async addUser(createUserDto) {
    this.userRepository.create(createUserDto);
    return await this.userRepository.save(createUserDto);
  }
}
