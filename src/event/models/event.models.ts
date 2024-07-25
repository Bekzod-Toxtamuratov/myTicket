import { ApiProperty } from "@nestjs/swagger";
import {
  Table,
  Model,
  Column,
  DataType,
  ForeignKey,
  BelongsTo,
} from "sequelize-typescript";
import { EventType } from "../../event-type/models/event-type.models";
import { Venue } from "../../venue/models/venue.model";

interface EvenCreationAttr {
  name: string;
  photo: string;
  start_date: string;
  start_time: Date;
  finish_date: string;
  finish_time: string;
  info: string;
  language_id: number;
  even_type_id: number;
  human_category_id: number;
  venue_id: number;
  realese_data: string;

  image:string;
}

@Table({ tableName: "event" })
export class Event extends Model<Event, EvenCreationAttr> {
  //     ***********************

  @ApiProperty({ example: 1, description: "even unikal Id raqami " })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;
  //     ***********************

  @ApiProperty({
    example: "user name  example",
    description: "foydalunuvchi ismi  modelsni ichida",
  })
  @Column({
    type: DataType.STRING(100),
  })
  name: string;

  @ApiProperty({
    example: "uimage  example",
    description: "foydalunuvchi ismi  modelsni ichida",
  })
  @Column({
    type: DataType.STRING,
  })
  image: string;
  //     ***********************

  @ApiProperty({
    example: "photo  example",
    description: "photo description",
  })
  @Column({
    type: DataType.STRING,
  })
  photo: string;
  //     ***********************

  @ApiProperty({
    example: "start_date example ",
    description: "start_date modelsni ichida description",
  })
  @Column({
    type: DataType.STRING,
  })
  start_date: string;
  //     ***********************

  @ApiProperty({
    example: "start_time example ",
    description: "start_time modelsni ichida description",
  })
  @Column({
    type: DataType.DATE,
  })
  start_time: Date;
  //     ***********************

  @ApiProperty({
    example: "finish_date example ",
    description: "finish_date modelsni ichida description",
  })
  @Column({
    type: DataType.STRING,
  })
  finish_date: string;
  //     ***********************
  @ApiProperty({
    example: "finish time example ",
    description: "finish_time modelsni ichida description",
  })
  @Column({
    type: DataType.STRING,
  })
  finish_time: string;
  //     ***********************

  @ApiProperty({
    example: "ozi haqida example ",
    description: "describtion info",
  })
  @Column({
    type: DataType.STRING,
  })
  info: string;
  //     ***********************
  @ApiProperty({
    example: "realese_data example ",
    description: "realese_data  description",
  })
  @Column({
    type: DataType.STRING,
  })
  realese_data: string;

  // *******************************************************************************************8
  @ApiProperty({
    example: "event_language_id example ",
    description: "event_language_id  description",
  })
  // @ForeignKey(() => Event_language)
  // @Column({
  //   type: DataType.INTEGER,
  // })
  // event_language_id: number;
  // @BelongsTo(() => Event_language)
  // eventLanguage: Event_language;

  //     *************************************
  @ApiProperty({
    example: "even_type_id example ",
    description: "even_type_id  description",
  })
  // @ForeignKey(() => EventType)
  @Column({
    type: DataType.INTEGER,
  })
  even_type_id: number;
  // @BelongsTo(() => EventType)
  // event_type: EventType;
  //   ***********************

  @ApiProperty({
    example: "venue_id example ",
    description: "venue_id  description",
  })
  // @ForeignKey(() => Venue)
  @Column({
    type: DataType.INTEGER,
  })
  venue_id: number;
  // @BelongsTo(() => Venue)
  // venue: Venue;

  // ************************
  @ApiProperty({
    example: "human_category_id example ",
    description: "human_category_id  description",
  })
  @Column({
    type: DataType.INTEGER,
  })
  human_category_id: number;
}
