import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { ApiProperty, ApiTags } from "@nestjs/swagger";
import { Customer } from "../../customer/models/customer.models";

interface customer_addressADDressCreationAttr {
  customer_id: number;
  name: string;
  country_id: number;
  region_id: number;
  disctric_id: number;
  street: string;
  house: string;
  flat: string;
  location: string;
  post_index: string;
  info: string;
}

@Table({ tableName: "customer_address" })
@ApiTags("customer_address")
export class customer_address extends Model<
  customer_address,
  customer_addressADDressCreationAttr
> {
  @ApiProperty({
    example: 1,
    description: "customer_address unikal Id raqami ",
  })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({
    example: "name example",
    description: "name  describtion",
  })
  @Column({
    type: DataType.STRING,
  })
  name: string;

  @ApiProperty({
    example: "country_id example",
    description: "country_id describtion",
  })
  @Column({
    type: DataType.INTEGER,
  })
  country_id: number;

  @ApiProperty({
    example: "customer_id example",
    description: "customer_id describtion",
  })
  @ForeignKey(()=>Customer)
  @Column({
    type: DataType.INTEGER,
  })
  customer_id: number;

  @BelongsTo(()=>Customer)
  customer: Customer;

  @ApiProperty({
    example: "region_id example",
    description: "region_id describtion",
  })
  @Column({
    type: DataType.INTEGER,
  })
  region_id: number;

  @ApiProperty({
    example: "disctric_id example",
    description: "disctric_id describtion",
  })
  @Column({
    type: DataType.STRING,
  })
  disctric_id: number;

  @ApiProperty({
    example: "house example",
    description: "house describtion",
  })
  @Column({
    type: DataType.STRING,
  })
  house: string;

  @ApiProperty({
    example: "street example",
    description: "street describtion",
  })
  @Column({
    type: DataType.STRING,
  })
  street: string;

  @ApiProperty({
    example: "flat example",
    description: "flat describtion",
  })
  @Column({
    type: DataType.STRING,
  })
  flat: string;

  @ApiProperty({
    example: "location example",
    description: "location describtion",
  })
  @Column({
    type: DataType.STRING,
  })
  location: string;

  @ApiProperty({
    example: "post_index example",
    description: "post_index describtion",
  })
  @Column({
    type: DataType.STRING,
  })
  post_index: string;

  @ApiProperty({
    example: "info example",
    description: "info describtion",
  })
  @Column({
    type: DataType.STRING,
  })
  info: string;


}
