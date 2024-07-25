import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  HasOne,
  Model,
  Table,
} from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";
import { Cart } from "../../cart/models/cart.models";
import { Event } from "../../event/models/event.models";
import { Seat } from "../../seat/models/seat.model";

interface TicketCreationAttr {
  event_id: number;
  seat_id: number;
  status_id: number;

  price: number;
  service_free: number;
  ticket_type: number;
}

@Table({ tableName: "ticket" })
export class Ticket extends Model<Ticket, TicketCreationAttr> {
  @ApiProperty({ example: 1, description: "ticket unikal Id raqami " })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({
    example: "price example",
    description: "price  describtion ",
  })
  @Column({
    type: DataType.INTEGER,
  })
  price: number;

  @ApiProperty({
    example: "service_free example",
    description: "service_free  describtion ",
  })
  @Column({
    type: DataType.INTEGER,
  })
  service_free: number;

  @ApiProperty({
    example: "ticket_type example",
    description: "ticket_type  describtion ",
  })
  @Column({
    type: DataType.INTEGER,
  })
  ticket_type: number;

  @ApiProperty({
    example: "event_id example",
    description: "event_id  describtion ",
  })
  @ForeignKey(() => Event)
  @Column({
    type: DataType.INTEGER,
  })
  event_id: number;

  @ApiProperty({
    example: "seat_id example",
    description: "seat_id  describtion ",
  })
  @ForeignKey(() => Seat)
  @Column({
    type: DataType.INTEGER,
  })
  seat_id: number;

  @ApiProperty({
    example: "status_id example",
    description: "status_id  describtion ",
  })
  @Column({
    type: DataType.INTEGER,
  })
  status_id: number;

  @BelongsTo(() => Event)
  event: Event;

  @BelongsTo(() =>Seat)
  seat: Seat;

  @HasOne(() => Cart)
  cart: Cart[];
}
