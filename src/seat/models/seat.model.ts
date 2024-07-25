import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from "sequelize-typescript";
import { Venue } from "../../venue/models/venue.model";
import { Seat_type } from "../../seat_type/models/seat_type.model";
import { ApiProperty } from "@nestjs/swagger";

interface SeatCreationAttr {
  sector: number;
  row_number: number;
  number: number;
  venueId: number;
  seat_type_id: number;
  location_in_schema: string;
}

@Table({ tableName: "seat" })
export class Seat extends Model<Seat, SeatCreationAttr> {
  @ApiProperty({ example: 1, description: "seat unikal Id raqami " })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({
    example: "sektor about ichida",
    description: "sektor describtion",
  })
  @Column({
    type: DataType.INTEGER,
  })
  sector: number;

  @ApiProperty({
    example: "raqami about ichida",
    description: "raqami  describtion ",
  })
  @Column({
    type: DataType.INTEGER,
  })
  row_number: number;

  @ApiProperty({
    example: "number about ichida",
    description: "number  describtion ",
  })
  @Column({
    type: DataType.INTEGER,
  })
  number: number;

  @BelongsTo(() => Venue)
  venue: Venue;

  @ApiProperty({
    example: "tashqi kalit  about ichida",
    description: "tashqi kalit   describtion ",
  })
  @ForeignKey(() => Venue)
  @Column({
    type: DataType.INTEGER,
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  venueId: number;

  @ApiProperty({
    example: "tashqi kalit  seat_type_id  about ichida",
    description: "tashqi kalit   describtion ",
  })
  @ForeignKey(() => Seat_type)
  @Column({
    type: DataType.INTEGER,
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  seat_type_id: number;

  @ApiProperty({
    example: "location   about ichida",
    description: "location   describtion ",
  })
  @Column({
    type: DataType.STRING(100),
  })
  location_in_schema: string;

  @BelongsTo(() => Seat_type)
  seat_type: Seat_type;
}
