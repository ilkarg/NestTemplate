import { Controller, Get, Post, Body } from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { UserRepository } from './repositories/user.repository';
import { UserEntity } from './entities/user.entity';

@Controller('auth')
export class AuthController {
  constructor(private readonly userRepository: UserRepository) {}

  @Get('test')
  getTest(): string {
    return 'test';
  }

  @Get('index')
  getIndex(): string {
    return 'Index';
  }

  @Post('registration')
  async postRegistration(@Body() userDto: UserDto): Promise<any> {
    const userEntity: UserEntity = Object.assign(new UserEntity(), userDto);
    /*const userEntity: UserEntity = new UserEntity();
    userEntity.username = userDto.username;
    userEntity.password = userDto.password;*/
    const user = await this.userRepository.create(userEntity);
    return user;
  }
}