import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateEventTypeDto {
  @ApiProperty({ example: "myName is ", description: "ismi describtion" })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({
    example: "1 ",
    description: "parent_event_type_id describtion",
  })
  @IsNotEmpty()
  @IsNumber()
  parent_event_type_id: number;
}
