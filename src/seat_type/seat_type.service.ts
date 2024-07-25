import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateSeatTypeDto } from "./dto/create-seat_type.dto";
import { UpdateSeatTypeDto } from "./dto/update-seat_type.dto";
import { InjectModel } from "@nestjs/sequelize";
import { Seat_type } from "./models/seat_type.model";

@Injectable()
export class SeatTypeService {
  constructor(
    @InjectModel(Seat_type) private seat_typeRepo: typeof Seat_type
  ) {}
  async create(createSeatTypeDto: CreateSeatTypeDto) {
    return this.seat_typeRepo.create(createSeatTypeDto);
  }

  async findAll() {
    return this.seat_typeRepo.findAll({ include: { all: true } });
  }

  async findOne(id: number) {
    const seat = await this.seat_typeRepo.findByPk(id, {
      include: { all: true },
    });
    if (!seat) {
      throw new NotFoundException(`Seat-type with ID ${id} not found`);
    }
    return seat;
  }

  async updateSeatType(
    id: number,
    updateseatType: UpdateSeatTypeDto
  ): Promise<Seat_type> {
    const [numberOfAffectedRows, [updatedSeat]] =
      await this.seat_typeRepo.update(updateseatType, {
        where: { id },
        returning: true,
      });
    if (numberOfAffectedRows === 0) {
      throw new NotFoundException(`Seat-type with ID ${id} not found`);
    }
    return updatedSeat;
  }

  async remove(id: number) {
    try {
      const affectedRows = await this.seat_typeRepo.destroy({
        where: { id },
      });
      if (affectedRows > 0) {
        return `Seat-type with ID ${id} was removed successfully.`;
      } else {
        return `Seat-type with ID ${id} not found.`;
      }
    } catch (error) {
      throw new Error(
        `Error removing seat-type with ID ${id}: ${error.message}`
      );
    }
  }
}
