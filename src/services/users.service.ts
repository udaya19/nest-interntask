import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { User } from 'src/entities/users.entity';

import { CreateUserDto } from 'src/dto/createUserDto.dto';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    private jwtService: JwtService,
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

  async signInUser(email, password) {
    const user = await this.userRepository.findOneBy({ email });
    if (!user) {
      return 'Invalid email/password';
    }
    if (user.password !== password) {
      return 'Invalid email/password';
    }
    const payLoad = {
      name: user.name,
      email: user.email,
      id: user.id,
      isAdmin: user.isAdmin,
    };
    const token = await this.jwtService.signAsync(payLoad);
    return { user, token };
  }
}
