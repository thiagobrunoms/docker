import { Inject, Injectable } from '@nestjs/common';
import { UserEntity } from '../entities/user.entity';
import { UseRepository } from '../repositories/user_repository';

@Injectable()
export class UsersService {
    constructor(
        @Inject('IUserRepository')
        private readonly repository: UseRepository
    ) {}

    async getUsers(): Promise<UserEntity[]> {
        return await this.repository.find();   
    }
}
