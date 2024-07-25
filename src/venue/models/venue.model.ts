import {
  BelongsToMany,
  Column,
  DataType,
  HasMany,
  Model,
  Table,
} from "sequelize-typescript";
import { VenueVenueType } from "./venueVenuetType.model";
import { Venue_type } from "../../venue_type/models/venue_type.model";
import { Seat } from "../../seat/models/seat.model";
import { Venue_photo } from "../../venue_photo/models/venue_photo.model";
import { ApiProperty } from "@nestjs/swagger";

interface IVenueCreationAttr {
  name: string;
  address: string;
  location: string;
  site: string;
  phone: string;
  schema: string;
  region_id: number;
  district_id: number;
}
@Table({ tableName: "venue" })
export class Venue extends Model<Venue> {
  @ApiProperty({ example: "venue", description: "Venue details" })
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @ApiProperty({ example: "name example", description: "venue describtion" })
  @Column({
    type: DataType.STRING,
  })
  name: string;
  @ApiProperty({
    example: "address example",
    description: "address describtion",
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  address: string;

  @ApiProperty({
    example: "location example",
    description: "location describtion",
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  location: string;

  @ApiProperty({
    example: "site example",
    description: "site describtion",
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  site: string;

  @ApiProperty({
    example: "phone example",
    description: "phone describtion",
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  phone: string;

  @ApiProperty({
    example: "schema example",
    description: "schema describtion",
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  schema: string;

  @ApiProperty({
    example: "region id example",
    description: "region_id describtion",
  })
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  region_id: number;

  @ApiProperty({
    example: "disctirict id example",
    description: "districts_id describtion",
  })
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  district_id: number;

  @HasMany(() => Seat)
  seat: Seat;

  // @HasMany(() => Venue_photo)
  // venue_photo: Venue_photo[];

  @BelongsToMany(() => Venue_type, () => VenueVenueType)
  venue_type: Venue_type[];
}
