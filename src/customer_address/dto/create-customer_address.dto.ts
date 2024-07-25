import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateCustomerAddressDto {

  @ApiProperty({
    example: "customer_id",
    description: "customer_id describtion",
  })
  @IsNumber()
  @IsNotEmpty()
  customer_id: number;

  @ApiProperty({
    example: "address_address name",
    description: "Customers_address describtion",
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    example: "country_id",
    description: "country_id describtion",
  })
  @IsNumber()
  @IsNotEmpty()
  country_id: number;

  @ApiProperty({
    example: "region_id",
    description: "region_id describtion",
  })
  @IsNumber()
  @IsNotEmpty()
  region_id: number;

  @ApiProperty({
    example: "disctric_id",
    description: "disctric_id describtion",
  })
  @IsNumber()
  @IsNotEmpty()
  disctric_id: number;

  @ApiProperty({
    example: "street name",
    description: "street describtion",
  })
  @IsString()
  @IsNotEmpty()
  street: string;

  @ApiProperty({
    example: "house name",
    description: "house describtion",
  })
  @IsString()
  @IsNotEmpty()
  house: string;

  @ApiProperty({
    example: "flat name",
    description: "flat describtion",
  })
  @IsString()
  @IsNotEmpty()
  flat: string;

  @ApiProperty({
    example: "location example",
    description: "location describtion",
  })
  @IsString()
  @IsNotEmpty()
  location: string;

  @ApiProperty({
    example: "post_index example",
    description: "post_index describtion",
  })
  @IsString()
  @IsNotEmpty()
  post_index: string;

  @ApiProperty({
    example: "info example",
    description: "info describtion",
  })
  @IsString()
  @IsNotEmpty()
  info: string;
}
