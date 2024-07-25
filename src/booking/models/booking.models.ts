import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";
import { Cart } from "../../cart/models/cart.models";

interface BookingCreationAttr {
  cart_id: number;
  createAt: Date;
  finished: Date;
  payment_method_id: number;
  delevery_method_id: number;
  discount_coupon_id: number;
  status_id: number;
}
@Table({ tableName: "booking" })
export class Booking extends Model<Booking, BookingCreationAttr> {
  @ApiProperty({ example: 1, description: "booking unikal Id raqami " })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ForeignKey(() => Cart)
  @ApiProperty({
    example: "cart_id example",
    description: "cart_id  describtion",
  })
  @Column({
    type: DataType.INTEGER,
  })
  cart_id: number;

  @ApiProperty({
    example: "createAt example",
    description: "createAt describtion",
  })
  @Column({
    type: DataType.DATE,
  })
  createAt: Date;

  @ApiProperty({
    example: "finished example",
    description: "finished describtion",
  })
  @Column({
    type: DataType.DATE,
  })
  finished: Date;

  @ApiProperty({
    example: "payment_method_id example",
    description: "payment_method_id describtion",
  })
  @Column({
    type: DataType.INTEGER,
  })
  payment_method_id: number;

  @ApiProperty({
    example: "delevery_method_id example",
    description: "delevery_method_id describtion",
  })
  @Column({
    type: DataType.INTEGER,
  })
  delevery_method_id: number;

  @ApiProperty({
    example: "discount_coupon_id example",
    description: "discount_coupon_id describtion",
  })
  @Column({
    type: DataType.INTEGER,
  })
  discount_coupon_id: number;

  @ApiProperty({
    example: "status_id example",
    description: "status_id describtion",
  })
  @Column({
    type: DataType.INTEGER,
  })
  status_id: number;


  // @BelongsTo(()=>Cart)
  // cart: Cart;
}
