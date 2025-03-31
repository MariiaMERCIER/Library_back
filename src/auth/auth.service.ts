import {
  HttpException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { CreateUserDto } from 'src/users/dto/create.user.dto';
import { User } from 'src/users/user.entity';
import { UsersService } from 'src/users/user.service';
import { uid } from 'uid';
import { SHA256, encBase64 } from 'crypto-js';
import { JwtService } from '@nestjs/jwt';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signUp(user: CreateUserDto): Promise<CreateUserDto> {
    const password = user.password;
    const salt = uid(16);
    const hash = SHA256(password + salt).toString(encBase64);
    const token = uid(16);
    const newUser = {
      ...user,
      salt,
      password: hash,
      token,
    };
    return this.usersService.create(newUser);
  }

  async logIn(
    email: string,
    password: string,
  ): Promise<{ access_token: string }> {
    const user = await this.usersService.findOneByEmail(email);
    if (!user) {
      throw new HttpException('User Not Found', 404);
    }
    const salt = user.salt;
    const hash = SHA256(password + salt).toString(encBase64);
    if (hash !== user.password) {
      throw new UnauthorizedException();
    }

    const payload = { sub: user.id, email: user.email };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
