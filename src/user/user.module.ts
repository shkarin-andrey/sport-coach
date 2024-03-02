import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from 'src/models/user.model';
import { UserController } from './user.controller';
import { Role } from 'src/models/roles.model';
import { UserRoles } from 'src/models/user-roles.model';
import { RolesModule } from 'src/roles/roles.module';

@Module({
  imports: [SequelizeModule.forFeature([User, Role, UserRoles]), RolesModule],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
