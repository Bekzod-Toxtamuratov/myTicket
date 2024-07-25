import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";
import { customer_address } from "../../customer_address/models/customer_address.models";
import { customer_Card } from "../../customer_card/models/customer_card.models";
import { Cart } from "../../cart/models/cart.models";

interface CustomerCreationAttr {
  first_name: string;
  last_name: string;
  phone_name: string;
  hashed_password: string;
  email: string;
  birth_date: string;
  gender: string;
  customer_lang_id: number;
  hashed_refresh_token: string;
}

@Table({ tableName: "customer" })
export class Customer extends Model<Customer, CustomerCreationAttr> {
  @ApiProperty({ example: 1, description: "customer unikal Id raqami " })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({
    example: "customer first_name example",
    description: "customer first_name describtion",
  })
  @Column({
    type: DataType.STRING,
  })
  first_name: string;

  @ApiProperty({
    example: "last_name example",
    description: "last_name describtion",
  })
  @Column({
    type: DataType.STRING,
  })
  last_name: string;

  @ApiProperty({
    example: "phone_name example",
    description: "phone_name describtion",
  })
  @Column({
    type: DataType.STRING,
  })
  phone_name: string;

  @ApiProperty({
    example: "hashed_password example",
    description: "hashed_password describtion",
  })

  @Column({
    type: DataType.STRING,
  })
  hashed_password: string;

  @ApiProperty({
    example: "email example",
    description: "email describtion",
  })
  @Column({
    type: DataType.STRING,
  })
  email: string;

  @ApiProperty({
    example: "birth_date example",
    description: "birth_date describtion",
  })
  @Column({
    type: DataType.STRING,
  })
  birth_date: string;

  @ApiProperty({
    example: "gender example",
    description: "gender describtion",
  })
  @Column({
    type: DataType.STRING,
  })
  gender: string;

  @ApiProperty({
    example: "customer_lang_id example",
    description: "customer_lang_id describtion",
  })
  @Column({
    type: DataType.INTEGER,
  })
  customer_lang_id: number;

  @ApiProperty({
    example: "hashed_refresh_token example",
    description: "hashed_refresh_token describtion",
  })
  @Column({
    type: DataType.STRING,
  })
  hashed_refresh_token: string;

  // @HasMany(() => customer_address)
  // customer_address: customer_address[];

  // @HasMany(() => customer_Card)
  // customer_Card: customer_Card[];

  // @HasMany(() => Cart)
  // cart: Cart[];
}
