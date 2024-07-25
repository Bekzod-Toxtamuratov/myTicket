import { Module } from "@nestjs/common";
import { SeatService } from "./seat.service";
import { SeatController } from "./seat.controller";
import { SequelizeModule } from "@nestjs/sequelize";
import { Seat } from "./models/seat.model";
import { Venue } from "../venue/models/venue.model";

@Module({
  imports: [SequelizeModule.forFeature([Seat, Venue])],
  controllers: [SeatController],
  providers: [SeatService],
})
export class SeatModule {}
