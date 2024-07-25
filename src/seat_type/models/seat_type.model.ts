import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { Seat } from "../../seat/models/seat.model";
import { ApiProperty } from "@nestjs/swagger";

interface Seat_typeCreationAttr {
  name: string;
}

@Table({ tableName: "seat_type" })
export class Seat_type extends Model<Seat_type, Seat_typeCreationAttr> {

  @ApiProperty({ example: 1, description: "seat-type unikal Id raqami " })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({
    example: "name example",
    description: "name  describtion ",
  })
  @Column({
    type: DataType.STRING(100),
  })
  name: string;

  @HasMany(() => Seat)
  seat: Seat;
}
