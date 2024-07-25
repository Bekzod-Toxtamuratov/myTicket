import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from "sequelize-typescript";
import { Venue } from "./venue.model";
import { Venue_type } from "../../venue_type/models/venue_type.model";

interface IVenueVenueCreationAttr {
  venueId: number;
  venue_TypeId: number;
}

@Table({ tableName: "venueVenueType" })

export class VenueVenueType extends Model<
  VenueVenueType,
  IVenueVenueCreationAttr
> {

  
  @ForeignKey(() => Venue)
  @Column({
    type: DataType.INTEGER,
  })
  venueId: number;


  @ForeignKey(() => Venue_type)
  @Column({
    type: DataType.INTEGER,
  })
  venue_TypeId: number;
}
