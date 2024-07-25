import { Module } from "@nestjs/common";
import { VenuePhotoService } from "./venue_photo.service";
import { VenuePhotoController } from "./venue_photo.controller";
import { SequelizeModule } from "@nestjs/sequelize";
import { Venue_photo } from "./models/venue_photo.model";
import { Venue } from "../venue/models/venue.model";
import { FileModule } from "../file/file.module";

@Module({
  imports: [SequelizeModule.forFeature([Venue_photo,Venue]),FileModule],
  controllers: [VenuePhotoController],
  providers: [VenuePhotoService],
})
export class VenuePhotoModule {}
