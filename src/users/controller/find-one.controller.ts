import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { UsersService } from '../user.service';

@Controller('user')
export class FindOneUserController {
  constructor(private usersService: UsersService) {}

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const data = await this.usersService.findOne(id);
    return {
      success: true,
      data,
      populate: 'authors',
      message: 'User Fetched Successfully',
    };
  }
  catch(error) {
    return {
      success: false,
      message: error.message,
    };
  }
}
