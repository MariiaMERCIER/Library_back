import { Controller, Put, Body, Param, Patch } from '@nestjs/common';
import { UsersService } from '../user.service';
import { User } from '../user.entity';
import { UpdateUserDto } from '../dto/update.user.dto';

@Controller('users')
export class UpdateUserController {
  constructor(private usersService: UsersService) {}

  @Patch(':id/update')
  async update(@Param('id') id, @Body() user: UpdateUserDto) {
    try {
      await this.usersService.update(id, user);
      return {
        success: true,
        message: 'User Updated Successfully',
      };
    } catch (error) {
      return {
        success: false,
        message: error.message,
      };
    }
  }
}
