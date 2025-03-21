import { Controller, Get, Post, Put, Delete, Body } from '@nestjs/common';
import { UsersService } from '../user.service';
import { CreateUserDto } from '../dto/create.user.dto';

@Controller('user')
export class CreateUserController {
  constructor(private usersService: UsersService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    try {
      await this.usersService.create(createUserDto);

      return {
        success: true,
        message: 'User Created Successfully',
      };
    } catch (error) {
      return {
        success: false,
        message: error.message,
      };
    }
  }
}
