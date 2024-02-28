import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateRoleDto {
  @ApiProperty({
    example: 'ADMIN',
    description: 'Уникальная роль пользователя',
  })
  @IsNotEmpty()
  readonly value: string;

  @ApiProperty({
    example: 'Администратор',
    description: 'Описание роли пользователя',
  })
  @IsNotEmpty()
  readonly description: string;
}
