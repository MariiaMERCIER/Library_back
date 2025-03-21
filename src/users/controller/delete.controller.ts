import { Controller, Delete, Param } from '@nestjs/common';
import { UsersService } from '../user.service';

@Controller('user')
export class DeleteUserController {
  constructor(private usersService: UsersService) {}

  @Delete(':id')
  async delete(@Param('id') id: string) {
    try {
      await this.usersService.delete(id);
      return {
        success: true,
        message: 'User Deleted Successfully',
      };
    } catch (error) {
      return {
        success: false,
        message: error.message,
      };
    }
  }
}
