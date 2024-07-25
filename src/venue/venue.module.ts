import { Module } from "@nestjs/common";
import { VenueService } from "./venue.service";
import { VenueController } from "./venue.controller";
import { SequelizeModule } from "@nestjs/sequelize";
import { Venue } from "./models/venue.model";
import { Venue_photo } from "../venue_photo/models/venue_photo.model";
import { FileModule } from "../file/file.module";

@Module({
  imports: [SequelizeModule.forFeature([Venue,Venue_photo]),FileModule],
  controllers: [VenueController],
  providers: [VenueService],
})
export class VenueModule {}
