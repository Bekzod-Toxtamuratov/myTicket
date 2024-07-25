import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

/* 
 event_id: number;
  seat_id: number;
  status_id: number;

  price: number;
  service_free: number;
  ticket_type: number;

*/ export default class CreateTicketDto {
  @ApiProperty({ example: "price is ", description: "price describtion" })
  @IsNotEmpty()
  @IsNumber()
  price: number;

  @ApiProperty({
    example: "1 ",
    description: "service_free describtion",
  })
  @IsNotEmpty()
  @IsNumber()
  service_free: number;

  @ApiProperty({
    example: "1 ",
    description: "ticket_type describtion",
  })
  @IsNotEmpty()
  @IsNumber()
  ticket_type: number;

  @ApiProperty({
    example: "1 ",
    description: "event_id describtion",
  })
  @IsNotEmpty()
  @IsNumber()
  event_id: number;

  @ApiProperty({
    example: "1 ",
    description: "seat_id describtion",
  })
  @IsNotEmpty()
  @IsNumber()
  seat_id: number;

  @ApiProperty({
    example: "1 ",
    description: "status_id describtion",
  })
  @IsNotEmpty()
  @IsNumber()
  status_id: number;
}
