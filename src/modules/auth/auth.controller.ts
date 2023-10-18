import { Controller, Post, Body } from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { UserRepository } from './repositories/user.repository';
import { UserEntity } from './entities/user.entity';

@Controller('auth')
export class AuthController {
  constructor(private readonly userRepository: UserRepository) {}

  @Post('registration')
  async postRegistration(@Body() userDto: UserDto): Promise<string> {
    const userEntity: UserEntity = Object.assign(new UserEntity(), userDto);
    /*const userEntity: UserEntity = new UserEntity();
    userEntity.username = userDto.username;
    userEntity.password = userDto.password;*/
    const user = await this.userRepository.create(userEntity);
    return JSON.stringify(user);
  }

  @Post('login')
  async postLogin(@Body() userDto: UserDto): Promise<string> {
    const userEntity = Object.assign(new UserEntity(), userDto);
    const user = await this.userRepository.find(userEntity);
    return JSON.stringify(user.length > 0 ? user[0] : {response: 'Неверные логин или пароль'});
  }
}