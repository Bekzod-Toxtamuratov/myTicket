import { Column, DataType, Model, Table } from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";

interface SeatCreationAttr {
  // name: string;
  // parent_event_type_id: number;

  name?: string;
  parent_event_type_id?: number;
}

@Table({ tableName: "event_type", createdAt: false, updatedAt: false })
export class EventType extends Model<EventType, SeatCreationAttr> {
  @ApiProperty({ example: 1, description: "event_type unikal Id raqami " })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({
    example: "event_type about ichida",
    description: "event_type describtion",
  })
  @Column({
    type: DataType.STRING,
  })
  name: string;

  @ApiProperty({
    example: "parent_event_type_id about ichida",
    description: "parent_event_type_id  describtion ",
  })
  @Column({
    type: DataType.INTEGER,
  })
  parent_event_type_id: {
    references: {
      model: "event_type";
      key: "id";
    };
  };
}
