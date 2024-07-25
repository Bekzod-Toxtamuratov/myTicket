import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateCustomerCardDto {
  @ApiProperty({ example: "123456789", description: "Card number" })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({
    example: "phone_number",
    description: "phone_number descibtion",
  })
  @IsNotEmpty()
  @IsString()
  phone_number: string;

  @ApiProperty({
    example: "number",
    description: "number descibtion",
  })
  @IsNotEmpty()
  @IsNumber()
  number: number;

  @ApiProperty({
    example: "customer_id example",
    description: "customer_id descibtion",
  })
  @IsNotEmpty()
  @IsNumber()
  customer_id;

  @ApiProperty({
    example: "year example",
    description: "year descibtion",
  })
  @IsNotEmpty()
  @IsString()
  year: string;

  @ApiProperty({
    example: "month example",
    description: "month descibtion",
  })
  @IsNotEmpty()
  @IsString()
  month: string;

  @ApiProperty({
    example: "is_active example",
    description: "is_active descibtion",
  })
  @IsNotEmpty()
  @IsBoolean()
  is_active: boolean;

  @ApiProperty({
    example: "is_main example",
    description: "is_main descibtion",
  })
  @IsNotEmpty()
  @IsBoolean()
  is_main: boolean;
}
