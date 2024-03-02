import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {
  SequelizeModuleOptions,
  SequelizeOptionsFactory,
} from '@nestjs/sequelize';

import { EnumConfig } from './enumConfig/enumConfig';
import { User } from 'src/models/user.model';
import { Role } from 'src/models/roles.model';
import { UserRoles } from 'src/models/user-roles.model';

@Injectable()
export class SequelizeConfigService implements SequelizeOptionsFactory {
  constructor(private readonly configService: ConfigService) {}

  createSequelizeOptions(): SequelizeModuleOptions {
    const {
      pg: { dialect, logging, host, port, username, password, database },
    } = this.configService.get(EnumConfig.DATABASE);

    return {
      dialect,
      logging,
      host,
      port,
      username,
      password,
      database,
      models: [User, Role, UserRoles],
      autoLoadModels: true,
      synchronize: true,
    };
  }
}
