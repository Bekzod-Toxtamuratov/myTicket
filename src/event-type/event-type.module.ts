import { Module } from "@nestjs/common";
import { EventTypeService } from "./event-type.service";
import { EventTypeController } from "./event-type.controller";
import { SequelizeModule } from "@nestjs/sequelize";
import { EventType } from "./models/event-type.models";

@Module({
  imports: [SequelizeModule.forFeature([EventType])],
  controllers: [EventTypeController],
  providers: [EventTypeService],
})
export class EventTypeModule {}
