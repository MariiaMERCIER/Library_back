import { Controller, Get } from '@nestjs/common';
import { UsersService } from '../user.service';

@Controller('user')
export class FindAllUserController {
  constructor(private usersService: UsersService) {}

  @Get()
  async getAll() {
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
