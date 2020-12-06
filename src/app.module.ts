import { Module } from '@nestjs/common';
import { UserModule } from './server/users/users.module';
import { PostModule } from './server/posts/posts.module';

@Module({
  imports: [UserModule, PostModule]
})
export class AppModule { }
