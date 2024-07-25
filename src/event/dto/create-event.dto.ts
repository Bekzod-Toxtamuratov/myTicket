import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateEventDto {
  @ApiProperty({ example: "example", description: "event name" })
  // @IsNotEmpty()
  // @IsString()
  name: string;

  @ApiProperty({ example: "example photo", description: "event photo" })
  // @IsString()
  // @IsNotEmpty()
  photo: string;

  @ApiProperty({
    example: "example start_date",
    description: "start_date description",
  })
  // @IsString()
  // @IsNotEmpty()
  start_date: string;

  @ApiProperty({
    example: "example start_time",
    description: "start_time description",
  })
  // @IsNotEmpty()
  // @IsString()
  start_time: Date;

  @ApiProperty({
    example: "example finish_date",
    description: "finish_date description",
  })
  // @IsNotEmpty()
  // @IsString()
  finish_date: string;

  @ApiProperty({
    example: "example finish_time",
    description: "finish_time description",
  })
  // @IsNotEmpty()
  // @IsString()
  finish_time: string;

  @ApiProperty({
    example: "example info",
    description: "info description",
  })
  // @IsNotEmpty()
  // @IsString()
  info: string;

  @ApiProperty({
    example: "language_id info",
    description: "language_id description",
  })
  // @IsNotEmpty()
  // @IsNumber()
  event_language_id: number;

  @ApiProperty({
    example: "even_type_id info",
    description: "even_type_id description",
  })
  // @IsNotEmpty()
  // @IsNumber()
  even_type_id: number;

  @ApiProperty({
    example: "human_category_id info",
    description: "human_category_id description",
  })
  // @IsNotEmpty()
  // @IsNumber()
  human_category_id: number;

  @ApiProperty({
    example: "venue_id info",
    description: "venue_id description",
  })
  // @IsNotEmpty()
  // @IsNumber()
  venue_id: number;

  @ApiProperty({
    example: "realese_data info",
    description: "realese_data description",
  })
  // @IsNotEmpty()
  // @IsString()
  realese_data: string;
}
