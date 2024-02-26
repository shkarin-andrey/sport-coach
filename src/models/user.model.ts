import { Table, Model, Column } from 'sequelize-typescript';

@Table
export class User extends Model {
  @Column
  lastName: string;

  @Column
  firstName: string;
}
