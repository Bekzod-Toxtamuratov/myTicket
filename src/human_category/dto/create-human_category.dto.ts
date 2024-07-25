import {ApiProperty,ApiPropertyOptional} from "@nestjs/swagger";

import { IsEnum,IsNotEmpty,IsNumber,IsString} from "class-validator";

export class CreateHumanCategoryDto {
  @ApiProperty({ example: "user1", description: "foydalanuvchi ismi" })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    example: "18 cretate-human-category ni ichida",
    description: "Foydalanuvchi yoshi cretate-human-category ni ichida",
  })
  @IsNotEmpty()
  @IsNumber()
  start_age: number;

  @ApiProperty({
    example: "30",
    description: "Foydalanuvchi yoshi",
  })
  @IsNotEmpty()
  @IsNumber()
  finish_age: number;

  @ApiProperty({
    example: "ayol | erkak",
    description: "Foydalanuvchi jinsi",
  })
  @IsNotEmpty()
  @IsEnum(["erkak", "ayol"])
  gender: string;
}
