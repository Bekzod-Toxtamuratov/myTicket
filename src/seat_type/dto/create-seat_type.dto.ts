import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";



export class CreateSeatTypeDto {
  @ApiProperty({ example: "myName is ", description: "ismi describtion" })

   @IsNotEmpty()
   @IsString()
   name: string;
}
