import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class AddRoleDto {
  @ApiProperty({
    example: 'ADMIN',
    description: 'Уникальная роль пользователя',
  })
  @IsNotEmpty()
  readonly value: string;

  @ApiProperty({
    example: 1,
    description: 'Уникальный идентификатор пользователя',
  })
  @IsNotEmpty()
  readonly userId: number;
}
