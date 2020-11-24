import { Module } from '@nestjs/common';
import { UserModule } from './server/users/users.module';
import { MainModule } from './server/main/main.module';

@Module({
  imports: [MainModule],
})
export class AppModule {}
