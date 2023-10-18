import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { UserRepository } from './repositories/user.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';

@Module({
    imports: [TypeOrmModule.forFeature([UserEntity])],
  controllers: [AuthController],
  providers: [UserRepository],
})
export class AuthModule {}