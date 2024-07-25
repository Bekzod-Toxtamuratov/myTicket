import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";
import { IsEmail } from "sequelize-typescript";

export class CreateCustomerDto {
  @ApiProperty({
    example: "first_name is ",
    description: "first_name describtion",
  })
  // @IsNotEmpty()
  // @IsString()
  first_name: string;

  @ApiProperty({
    example: "last_name is ",
    description: "last_name describtion",
  })
  // @IsNotEmpty()
  // @IsString()
  last_name: string;

  @ApiProperty({
    example: "last_name is ",
    description: "last_name describtion",
  })
  // @IsNotEmpty()
  // @IsString()
  //   @IsPhoneNumber()
  phone_name: string;

  @ApiProperty({
    example: "hashed_password is ",
    description: "hashed_password describtion",
  })
  // @IsNotEmpty()
  // @IsString()
  hashed_password: string;

  @ApiProperty({
    example: "email is ",
    description: "email describtion",
  })
  // @IsNotEmpty()
  //     @IsEmail()
  email: string;

  @ApiProperty({
    example: "birth_date is ",
    description: "birth_date describtion",
  })
  // @IsNotEmpty()
  // @IsString()
  birth_date: string;

  @ApiProperty({
    example: "gender is ",
    description: "gender describtion",
  })
  // @IsNotEmpty()
  // @IsString()
  gender: string;

  @ApiProperty({
    example: "customer_lang_id is ",
    description: "customer_lang_id describtion",
  })
  // @IsNotEmpty()
  // @IsNumber()
  customer_lang_id: number;

  @ApiProperty({
    example: "hashed_refresh_token is ",
    description: "hashed_refresh_token describtion",
  })
  // @IsNotEmpty()
  // @IsString()
  hashed_refresh_token: string;
}
