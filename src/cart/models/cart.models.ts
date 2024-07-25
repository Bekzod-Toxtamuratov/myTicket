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
import { ApiProperty, ApiTags } from "@nestjs/swagger";
import { Booking } from "../../booking/models/booking.models";
import { Customer } from "../../customer/models/customer.models";
import { Ticket } from "../../ticket/models/ticket.models";

interface CartCreationAttr {
  ticket_id: number;
  customer_id: number;
  createdAt: Date;
  finishedAt: Date;
  status_id: number;
}

@Table({ tableName: "cart" })
@ApiTags("customer_address")
export class Cart extends Model<Cart, CartCreationAttr> {
  @ApiProperty({
    example: 1,
    description: "cart unikal Id raqami ",
  })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({
    example: "ticket_id  example",
    description: "ticket_id  describtion",
  })
  // bu yerda qoymaslik kerak;
  // @BelongsTo(() => Ticket)
  // ticket: Ticket;
  @ForeignKey(() => Ticket)
  @Column({
    type: DataType.INTEGER,
  })
  ticket_id: number;

  @ApiProperty({
    example: "customer_id example",
    description: "customer_id describtion",
  })
  @ForeignKey(() => Customer)
  @Column({
    type: DataType.INTEGER,
  })
  customer_id: number;

  @ApiProperty({
    example: "status_id example",
    description: "status_id describtion",
  })
  @Column({
    type: DataType.INTEGER,
  })
  status_id: number;

  @ApiProperty({
    example: "createdAt example",
    description: "createdAt describtion",
  })
  @Column({
    type: DataType.DATE,
  })
  createdAt: Date;

  @ApiProperty({
    example: "finishedAt example",
    description: "finishedAt describtion",
  })
  @Column({
    type: DataType.DATE,
  })
  finishedAt: Date;

  // @HasMany(() => Booking)
  // bookings: Booking[];

  @BelongsTo(() => Customer)
  customer: Customer;

  @BelongsTo(() => Ticket)
  ticket: Ticket;
}
