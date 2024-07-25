import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateVenueTypeDto {
  @ApiProperty({ example: "user1", description: "foydalanuvchi ismi" })
  @IsString()
  @IsNotEmpty()
  name: string;
}
