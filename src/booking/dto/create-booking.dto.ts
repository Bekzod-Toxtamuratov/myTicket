import { ApiProperty } from "@nestjs/swagger";
import { IsDataURI, isDate, IsEmpty, IsNumber } from "class-validator";

export class CreateBookingDto {
  @ApiProperty({
    example: "cart_id example ",
    description: "cart_id describtion",
  })
  // @IsEmpty()
  @IsNumber()
  cart_id: number;

  @ApiProperty({
    example: "createAt example ",
    description: "createAt describtion",
  })
  // @IsEmpty()
  createAt: Date;

  @ApiProperty({
    example: "finished example ",
    description: "finished describtion",
  })
  // @IsEmpty()
  finished: Date;

  @ApiProperty({
    example: "payment_method_id example ",
    description: "payment_method_id describtion",
  })
  // @IsEmpty()
  @IsNumber()
  payment_method_id: number;

  @ApiProperty({
    example: "delevery_method_id example ",
    description: "delevery_method_id describtion",
  })
  // @IsEmpty()
  @IsNumber()
  delevery_method_id: number;

  @ApiProperty({
    example: "discount_coupon_id example ",
    description: "discount_coupon_id describtion",
  })
  // @IsEmpty()
  @IsNumber()
  discount_coupon_id: number;

  @ApiProperty({
    example: " example  status_id",
    description: "status_id describtion",
  })
  // @IsEmpty()
  @IsNumber()
  status_id: number;
}
