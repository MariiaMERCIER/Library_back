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

  async findOneByEmail(email: string): Promise<User | null> {
    const userData = await this.usersRepository.findOneBy({ email });
    if (!userData) {
      throw new HttpException('User Not Found', 404);
    }
    return userData;
  }

  async create(user: CreateUserDto): Promise<User> {
    return this.usersRepository.save(user);
  }
  // async login(email: string, password: string): Promise<Partial<User>> {
  //   const user = await this.usersRepository.findOneBy({ email });

  //   if (!user) {
  //     throw new HttpException('User Not Found', 404);
  //   }

  //   const salt = user.salt;
  //   const hash = SHA256(password + salt).toString(encBase64);
  //   if (hash !== user.password) {
  //     throw new HttpException("The email or password isn't correct", 401);
  //   }
  //   const responseUser = {
  //     id: user.id,
  //     token: user.token,
  //     email: user.email,
  //     fullName: user.fullName,
  //   };
  //   return responseUser;
  // }

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
