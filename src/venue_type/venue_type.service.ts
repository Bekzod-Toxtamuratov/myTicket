import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateVenueTypeDto } from "./dto/create-venue_type.dto";
import { UpdateVenueTypeDto } from "./dto/update-venue_type.dto";
import { InjectModel } from "@nestjs/sequelize";
import { Venue_type } from "./models/venue_type.model";

@Injectable()
export class VenueTypeService {
  constructor(
    @InjectModel(Venue_type) private venue_typeRepo: typeof Venue_type
  ) {}
  async create(createVenueTypeDto: CreateVenueTypeDto) {
    return this.venue_typeRepo.create(createVenueTypeDto);
  }

  async getAllVenueType() {
    return this.venue_typeRepo.findAll({ include: { all: true } });
  }

  async findOne(id: number) {
    const venue_type = await this.venue_typeRepo.findByPk(id, {
      include: { all: true },
    });
    if (!venue_type) {
      throw new NotFoundException(`Venue_type with ID ${id} not found`);
    }
    return venue_type;
  }

  async update(
    id: number,
    updateVenueTypeDto: UpdateVenueTypeDto
  ): Promise<Venue_type> {
    const [numberOfAffectedRows, [updatedSeat]] =
      await this.venue_typeRepo.update(updateVenueTypeDto, {
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
      const affectedRows = await this.venue_typeRepo.destroy({
        where: { id },
      });
      if (affectedRows > 0) {
        return `venue-type with ID ${id} was removed successfully.`;
      } else {
        return `venue-type with ID ${id} not found.`;
      }
    } catch (error) {
      throw new Error(
        `Error removing venue-type  with ID ${id}: ${error.message}`
      );
    }
  }
}
