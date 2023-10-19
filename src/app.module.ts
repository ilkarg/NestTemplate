import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { DatabaseModule } from './database.module';
import { AuthModule } from './modules/auth/auth.module';
import { SessionModule } from './modules/session/session.module';
import { CookieModule } from './modules/cookie/cookie.module';

@Module({
  imports: [DatabaseModule, AuthModule, SessionModule, CookieModule],
  controllers: [AppController],
})
export class AppModule {}