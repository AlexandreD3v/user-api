import { Module, CacheModule } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [UsersModule, TypeOrmModule.forRoot(), HttpModule, CacheModule.register()],
  controllers: [],
  providers: [],
})
export class AppModule {}
