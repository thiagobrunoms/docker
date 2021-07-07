import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as typeormconfig from '../ormconfig';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot(), UsersModule, TypeOrmModule.forRoot(typeormconfig),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
  