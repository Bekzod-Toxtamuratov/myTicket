import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateVenuePhotoDto } from "./dto/create-venue_photo.dto";
import { UpdateVenuePhotoDto } from "./dto/update-venue_photo.dto";
import { InjectModel } from "@nestjs/sequelize";
import { Venue_photo } from "./models/venue_photo.model";
import { FileService } from "../file/file.service";


@Injectable()
export class VenuePhotoService {
  constructor(
    @InjectModel(Venue_photo) private venue_photoRepo: typeof Venue_photo,
    private readonly fileService: FileService
  ) {}
  async create(createVenuePhotoDto: CreateVenuePhotoDto, image: any) {
    const fileName = await this.fileService.saveFile(image);
    console.log("fileName  ", fileName);
    const venue_photo = await this.venue_photoRepo.create({
      ...createVenuePhotoDto,
      image: fileName,
    });
    return venue_photo;
  }

  async getAllVenuePhoto() {
    return this.venue_photoRepo.findAll({ include: { all: true } });
  }

  async findOne(id: number) {
    const venueData = await this.venue_photoRepo.findByPk(id, {
      include: { all: true },
    });

    if (!venueData) {
      throw new NotFoundException(`venue_photo type with ID ${id} not found`);
    }
    return venueData;
  }

  async update(
    id: number,
    updateVenuePhotoDto: UpdateVenuePhotoDto
  ): Promise<Venue_photo> {
    const [numberOfAffectedRows, [updatedSeat]] =
      await this.venue_photoRepo.update(updateVenuePhotoDto, {
        where: { id },
        returning: true,
      });
    if (numberOfAffectedRows === 0) {
      throw new NotFoundException(`venue-type with ID ${id} not found`);
    }
    return updatedSeat;
  }

  async remove(id: number) {
    try {
      const affectedRows = await this.venue_photoRepo.destroy({
        where: { id },
      });
      if (affectedRows > 0) {
        return `venue-photo with ID ${id} was removed successfully.`;
      } else {
        return `venue-photo with ID ${id} not found.`;
      }
    } catch (error) {
      throw new Error(
        `Error removing venue-photos with ID ${id}: ${error.message}`
      );
    }
  }
}
