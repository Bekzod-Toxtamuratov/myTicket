import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";
import { Customer } from "../../customer/models/customer.models";

interface customer_cardCreationAttr {
  name: string;
  phone_number: string;
  customer_id: number;
  number: number;
  year: string;
  month: string;
  is_active: boolean;
  is_main: boolean;
}

@Table({ tableName: "customer_card" })
export class customer_Card extends Model<
  customer_Card,
  customer_cardCreationAttr
> {
  @ApiProperty({ example: 1, description: "customer_card unikal Id raqami " })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({
    example: "customer_car  name example",
    description: "customer_card name describtion",
  })
  @Column({
    type: DataType.STRING,
  })
  name: string;

  @ApiProperty({
    example: "customer_id  name example",
    description: "customer_id name describtion",
  })
  @ForeignKey(() => Customer)
  @Column({
    type: DataType.INTEGER,
  })
  customer_id: number;

  @ApiProperty({
    example: "phone_number example",
    description: "phone_number describtion",
  })
  @Column({
    type: DataType.STRING,
  })
  phone_number: string;

  @ApiProperty({
    example: "number example",
    description: "number describtion",
  })
  @Column({
    type: DataType.INTEGER,
  })
  number: number;

  @ApiProperty({
    example: "year example",
    description: "year describtion",
  })
  @Column({
    type: DataType.STRING,
  })
  year: string;

  @ApiProperty({
    example: "month example",
    description: "month describtion",
  })
  @Column({
    type: DataType.STRING,
  })
  month: string;

  @ApiProperty({
    example: "is_active example",
    description: "is_active describtion",
  })
  @Column({
    type: DataType.BOOLEAN,
  })
  is_active: boolean;

  @ApiProperty({
    example: "is_main example",
    description: "is_main describtion",
  })
  @Column({
    type: DataType.BOOLEAN,
  })
  is_main: boolean;

   
  @BelongsTo(()=>Customer)
  customer: Customer;

}
