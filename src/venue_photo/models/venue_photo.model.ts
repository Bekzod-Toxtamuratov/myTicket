import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  Model,
  Table,
} from "sequelize-typescript";
import { Venue } from "../../venue/models/venue.model";
import { ApiProperty } from "@nestjs/swagger";

interface Venue_photoCreationAttr {
  
  image: string;
  venue_id: number;
  url: string;
  
}

@Table({ tableName: "venue_photo" })
export class Venue_photo extends Model<Venue_photo, Venue_photoCreationAttr> {
  @ApiProperty({
    example: " exampl id",
    description: "venue_photo description",
  })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  // *********

  @ApiProperty({
    example: " example venue_id",
    description: "venue_id description",
  })
  // @ForeignKey(() => Venue)
  @Column({
    type: DataType.INTEGER,
  })
  venue_id: number;
  // *********
  @ApiProperty({
    example: " example url",
    description: "url description",
  })
  @Column({
    type: DataType.STRING,
  })
  url: string;

  @ApiProperty({
    example: " image url",
    description: "image description",
  })
  @Column({
    type: DataType.STRING,
  })
  image: string;

  // @BelongsTo(() => Venue)
  // venue1: Venue;
}
