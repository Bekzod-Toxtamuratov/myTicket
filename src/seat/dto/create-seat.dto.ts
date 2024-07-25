import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

import {IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateSeatDto {
  @ApiProperty({ example: "orindiq-1", description: "orindiq  joyi" })
  @IsNumber()
  @IsNotEmpty()
  sector: number;

  @ApiProperty({
    example: "qator raqami bu yerda ",
    description: "17",
  })
  @IsNotEmpty()
  @IsNumber()
  row_number: number;

  @ApiProperty({
    example: "30",
    description: "number bu yerda",
  })
  @IsNotEmpty()
  @IsNumber()
  number: number;

  @ApiProperty({
    example: "venuid bolishi kerak naryo betda",
    description: "venuid boyicha bu",
  })
  @IsNotEmpty()
  venueId: number;

  @ApiProperty({
    example: "1",
    description: "seat_type boyicha naryo",
  })
  seat_type_id: number;

  @ApiProperty({
    example: "Toshkent Drujba",
    description: "location boyicha",
  })
  @IsNotEmpty()
  @IsString()
  location_in_schema: string;
}
