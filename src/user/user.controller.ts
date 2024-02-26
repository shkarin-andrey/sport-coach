import { Get, Controller, Param } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(':id')
  getOneTodo(@Param('id') id: string) {
    return this.userService.findOne(id);
  }
}
