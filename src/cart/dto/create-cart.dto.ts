import { ApiProperty } from "@nestjs/swagger";
import { IsEmpty, IsNumber } from "class-validator";

export class CreateCartDto {
  @ApiProperty({
    example: "ticket_id example",
    description: "ticked_id describtion",
  })
  // @IsEmpty()
  @IsNumber()
  ticket_id: number;

  @ApiProperty({
    example: "customer_id example",
    description: "customer_id describtion",
  })
  // @IsEmpty()
  @IsNumber()
  customer_id: number;

  @ApiProperty({
    example: "createdAt example",
    description: "createdAt describtion",
  })
  // @IsEmpty()
  createdAt: Date;

  @ApiProperty({
    example: "finishedAt example",
    description: "finishedAt describtion",
  })
  // @IsEmpty()
  finishedAt: Date;

  @ApiProperty({
    example: "status_id example",
    description: "status_id describtion",
  })
  // @IsEmpty()
  @IsNumber()
  status_id: number;
}
