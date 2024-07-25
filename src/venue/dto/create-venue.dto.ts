import { ApiProperty } from "@nestjs/swagger";
import {
  IsNotEmpty,
  IsNumber,
  IsString,
  IsStrongPassword,
} from "class-validator";

export class CreateVenueDto {
  @ApiProperty({ example: "value name", description: "value describtion" })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: "address name", description: "address describtion" })
  @IsString()
  @IsNotEmpty()
  address: string;

  @ApiProperty({
    example: "location name",
    description: "location describtion",
  })
  @IsString()
  @IsNotEmpty()
  location: string;

  @ApiProperty({
    example: "site exapmle",
    description: "site describtion",
  })
  @IsString()
  @IsNotEmpty()
  site: string;

  @ApiProperty({
    example: "phone exapmle",
    description: "phone describtion",
  })
  @IsStrongPassword()
  @IsNotEmpty()
  phone: string;

  @ApiProperty({
    example: "venuid_id exapmle",
    description: "venuid describtion",
  })
  @IsNotEmpty()
  @IsNumber()
  venue_typeId: number;

  @ApiProperty({
    example: "schema exapmle",
    description: "schema describtion",
  })
  @IsString()
  @IsNotEmpty()
  schema: string;

  @ApiProperty({
    example: "region_id exapmle",
    description: "region_id describtion",
  })
  @IsNumber()
  @IsNotEmpty()
  region_id: number;

  @ApiProperty({
    example: "district_id exapmle",
    description: "district_id describtion",
  })
  @IsNumber()
  @IsNotEmpty()
  district_id: number;
}
