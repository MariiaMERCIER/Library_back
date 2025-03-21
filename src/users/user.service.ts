import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDto } from './dto/create.user.dto';
import { UpdateUserDto } from './dto/update.user.dto';
import { uid } from 'uid';
import { SHA256, encBase64 } from 'crypto-js';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return await this.usersRepository.find();
  }

  async findOne(id: string): Promise<User | null> {
    const userData = await this.usersRepository.findOneBy({ id });
    if (!userData) {
      throw new HttpException('User Not Found', 404);
    }
    return userData;
  }

  async create(user: CreateUserDto): Promise<User> {
    const password = user.password;
    const salt = uid(16);
    const hash = SHA256(password + salt).toString(encBase64);
    const token = uid(16);

    const newUser = {
      ...user,
      password: hash,
      token,
    };
    return this.usersRepository.save(newUser);
  }

  async update(id: string, user: UpdateUserDto): Promise<UpdateResult> {
    const existingUser = await this.findOne(id);
    if (!existingUser) {
      throw new HttpException('User Not Found', 404);
    }
    return await this.usersRepository.update(id, user);
  }

  async delete(id: string): Promise<User> {
    const existingUser = await this.findOne(id);
    if (!existingUser) {
      throw new HttpException('User Not Found', 404);
    }
    return await this.usersRepository.remove(existingUser);
  }
}
