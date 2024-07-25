import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateSeatDto } from "./dto/create-seat.dto";
import { UpdateSeatDto } from "./dto/update-seat.dto";
import { Seat } from "./models/seat.model";
import { InjectModel } from "@nestjs/sequelize";

@Injectable()
export class SeatService {
  constructor(@InjectModel(Seat) private seatRepo: typeof Seat) {}

  async create(createSeatDto: CreateSeatDto) {
    return this.seatRepo.create(createSeatDto);
  }

  async findAll() {
    return this.seatRepo.findAll({ include: { all: true } });
  }

  async findOne(id: number) {
    const seat = await this.seatRepo.findByPk(id, { include: { all: true } });
    if (!seat) {
      throw new NotFoundException(`Seat with ID ${id} not found`);
    }
    return seat;
  }

  async updateSeat(id: number, updateSeatDto: UpdateSeatDto): Promise<Seat> {
    const [numberOfAffectedRows, [updatedSeat]] = await this.seatRepo.update(
      updateSeatDto,
      {
        where: { id },
        returning: true,
      }
    );
    if (numberOfAffectedRows === 0) {
      throw new NotFoundException(`Seat with ID ${id} not found`);
    }
    return updatedSeat;
  }

  async remove(id: number): Promise<string> {
    try {
      const affectedRows = await this.seatRepo.destroy({ where: { id } });
      if (affectedRows > 0) {
        return `Seat with ID ${id} was removed successfully.`;
      } else {
        return `Seat with ID ${id} not found.`;
      }
    } catch (error) {
      throw new Error(`Error removing seat with ID ${id}: ${error.message}`);
    }
  }
}
