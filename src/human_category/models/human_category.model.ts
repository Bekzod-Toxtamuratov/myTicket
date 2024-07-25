import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, Model, Table } from "sequelize-typescript";

interface Human_categoryCreationAttr {
  name: string;
  start_age: number;
  finish_age: number;
  gender: string;
}

@Table({ tableName: "human_category" })
export class Human_category extends Model<
  Human_category,
  Human_categoryCreationAttr
> {
  @ApiProperty({ example: 1, description: "foydalunuvchi unikal Id raqami " })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({
    example: "user1 modelsni ichida",
    description: "foydalunuvchi ismi  modelsni ichida",
  })
  @Column({
    type: DataType.STRING(100),
  })
  name: string;

  @ApiProperty({
    example: "18yosh  modelsni ichida",
    description: "foydalunuvchi yoshi  modelsni ichida",
  })
  @Column({
    type: DataType.INTEGER,
  })
  start_age: number;

  @ApiProperty({
    example: "40yosh  modelsni ichida ",
    description: "foydalunuvchi yoshi  modelsni ichida",
  })
  @Column({
    type: DataType.INTEGER,
  })
  finish_age: number;

  @ApiProperty({
    example: "rost yoki yolgon ",
    description: "foydalunuvchi jinsi",
  })
  @Column({
    type: DataType.STRING,
  })
  gender: string;
}
