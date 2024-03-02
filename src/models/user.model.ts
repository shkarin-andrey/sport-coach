import { ApiProperty } from '@nestjs/swagger';
import {
  Table,
  Model,
  Column,
  DataType,
  BelongsToMany,
} from 'sequelize-typescript';
import { CreateUserDto } from 'src/dto/create-user.dto';
import { Role } from './roles.model';
import { UserRoles } from './user-roles.model';

@Table({ tableName: 'users' })
export class User extends Model<User, CreateUserDto> {
  @ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({
    example: 'qwe@mail.ru',
    description: 'Email пользователя',
  })
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  email: string;

  @ApiProperty({
    example: 'qweqweqw',
    description: 'Пароль пользователя',
  })
  @Column({ type: DataType.STRING, allowNull: false })
  password: string;

  @ApiProperty({
    example: 'Иван',
    description: 'Имя пользователя',
  })
  @Column({ type: DataType.STRING, allowNull: true })
  lastName: string;

  @ApiProperty({
    example: 'Иванов',
    description: 'Фамилия пользователя',
  })
  @Column({ type: DataType.STRING, allowNull: true })
  firstName: string;

  @BelongsToMany(() => Role, () => UserRoles)
  roles: Role[];
}
