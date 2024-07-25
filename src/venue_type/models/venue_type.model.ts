import {
  BelongsToMany,
  Column,
  DataType,
  HasMany,
  Model,
  Table,
} from "sequelize-typescript";
import { Venue } from "../../venue/models/venue.model";
import { VenueVenueType } from "../../venue/models/venueVenuetType.model";
import { ApiProperty } from "@nestjs/swagger";

interface Venue_typeCreationAttr {
  name: string;
}

@Table({ tableName: "venue_type" })
export class Venue_type extends Model<Venue_type, Venue_typeCreationAttr> {
  @ApiProperty({ example: 1, description: "venue-type unikal Id raqami " })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 1, description: "venue-type name maxsus raqami " })
  @Column({
    type: DataType.STRING(100),
  })
  name: string;

  @BelongsToMany(() => Venue, () => VenueVenueType)
  venue: Venue[];
}
