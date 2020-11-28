import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as jwt from 'jsonwebtoken';

import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}
  async createToken({ id, lastName }: User) {
    return jwt.sign({ id, lastName }, 'my_super_secret_on_github');
  }
  async getUserById(id: string): Promise<User> {
    return this.userRepository.findOne(id);
  }
}
