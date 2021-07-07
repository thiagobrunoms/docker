import { Controller, Get, Res } from '@nestjs/common';
import { UserEntity } from '../entities/user.entity';
import { UsersService } from '../service/users.service';
import { Response } from 'express';

@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService) {}

    @Get()
    async getUsers(@Res() res: Response) {
        const result: UserEntity[] = await this.userService.getUsers();
        
        res.render(
            'index',
            { users: result }   
        );
    }
}
