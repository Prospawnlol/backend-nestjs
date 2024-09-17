import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { FirebirdService } from 'src/firebird/firebird.service';

@Module({
    providers: [UserService, FirebirdService],
    controllers: [UserController],
})
export class UserModule {}
