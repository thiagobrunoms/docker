import { Inject, Module, Provider } from '@nestjs/common';
import { UsersService } from './service/users.service';
import { UsersController } from './controller/users.controller';
import { Connection } from 'typeorm';
import { UserEntity } from './entities/user.entity';
import { UseRepository } from './repositories/user_repository';

const userProviders: Provider[] = [
  {
    provide: 'IUserRepository',
    useFactory: (connection: Connection) => connection.getCustomRepository(UseRepository),
    inject: [Connection]
  }
]

@Module({
  providers: [UsersService, ...userProviders],
  controllers: [UsersController],
})
export class UsersModule {
  constructor(
    @Inject('IUserRepository')
    private readonly repository: UseRepository
  ) {
    const user1 = new UserEntity() 
    user1.fullName = 'João da Silva';
    user1.birthday = new Date(1986, 1, 13);
    user1.isActive = true;

    const user2 = new UserEntity() 
    user2.fullName = 'Maria Santana';
    user2.birthday = new Date(1987, 2, 14);
    user2.isActive = false;

    repository.save(user1);
    repository.save(user2);
  };
}
