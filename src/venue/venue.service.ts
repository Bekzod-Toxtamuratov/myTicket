import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateVenueDto } from "./dto/create-venue.dto";
import { UpdateVenueDto } from "./dto/update-venue.dto";
import { InjectModel } from "@nestjs/sequelize";
import { Venue } from "./models/venue.model";

@Injectable()
export class VenueService {
  constructor(@InjectModel(Venue) private venueRepo: typeof Venue) {}
  async create(createVenueDto: CreateVenueDto) {
    // return this.venueRepo.create(createVenueDto);
    try {
      const newVenue = await this.venueRepo.create(createVenueDto);
      await newVenue.$set("venue_type", [createVenueDto.venue_typeId]);
      await newVenue.save();
      return newVenue;
    } catch (error) {
      throw error;
    }
  }

  async getAllVenue() {
    return this.venueRepo.findAll({ include: { all: true } });
  }

  async findOne(id: number) {
    const seat = await this.venueRepo.findByPk(id, {
      include: { all: true },
    });
    if (!seat) {
      throw new NotFoundException(`venue_type with ID ${id} not found`);
    }
    return seat;
  }
  async update(id: number, updateVenueDto: UpdateVenueDto): Promise<Venue> {
    console.log("ok");
    const [numberOfAffectedRows, [updatedSeat]] = await this.venueRepo.update(
      updateVenueDto,
      {
        where: { id },
        returning: true,
      }
    );
    if (numberOfAffectedRows === 0) {
      throw new NotFoundException(`vebue with ID ${id} not found`);
    }
    return updatedSeat;
  }

  async remove(id: number) {
    try {
      const affectedRows = await this.venueRepo.destroy({
        where: { id },
      });
      if (affectedRows > 0) {
        return `venue with ID ${id} was removed successfully.`;
      } else {
        return `venue with ID ${id} not found.`;
      }
    } catch (error) {
      throw new Error(`Error removing venue with ID ${id}: ${error.message}`);
    }
  }
}
