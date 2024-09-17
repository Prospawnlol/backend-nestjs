import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from './create-user.dto';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('register')
  async register(@Body() createUserDto: CreateUserDto) {
    try {
      return this.userService.createUser(
        createUserDto.username,
        createUserDto.email,
        createUserDto.user_password
      );
    } catch (error) {
      console.error('Error al registrar el usuario:', error.message);
      throw error;
    }
  }
}
