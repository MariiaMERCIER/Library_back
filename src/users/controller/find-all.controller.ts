import { Controller, Get } from '@nestjs/common';
import { UsersService } from '../user.service';

@Controller('user')
export class FindAllUserController {
  constructor(private usersService: UsersService) {}

  async findAll() {
    try {
      const data = await this.usersService.findAll();
      return {
        success: true,
        data,
        message: 'User Fetched Successfully',
      };
    } catch (error) {
      return {
        success: false,
        message: error.message,
      };
    }
  }
}
