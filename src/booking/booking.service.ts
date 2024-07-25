import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateBookingDto } from "./dto/create-booking.dto";
import { UpdateBookingDto } from "./dto/update-booking.dto";
import { InjectModel } from "@nestjs/sequelize";
import { Booking } from "./models/booking.models";

@Injectable()
export class BookingService {
  constructor(@InjectModel(Booking) private bookingRepo: typeof Booking) {}
  create(createBookingDto: CreateBookingDto) {
    return this.bookingRepo.create(createBookingDto);
  }

  findAll() {
    return this.bookingRepo.findAll({ include: { all: true } });
  }
  async findOne(id: number) {
    const booking = await this.bookingRepo.findByPk(id, {
      include: { all: true },
    });
    if (!booking) {
      throw new NotFoundException(`booking with ID ${id} not found`);
    }
    return booking;
  }

  async updateBooking(
    id: number,
    updateBookingDto: UpdateBookingDto
  ): Promise<Booking> {
    const [numberOfAffectedRows, [updatedbooking]] =
      await this.bookingRepo.update(updateBookingDto, {
        where: { id },
        returning: true,
      });
    if (numberOfAffectedRows === 0) {
      throw new NotFoundException(`booking with ID ${id} not found`);
    }
    return updatedbooking;
  }

  async remove(id: number) {
    try {
      const affectedRows = await this.bookingRepo.destroy({
        where: { id },
      });
      if (affectedRows > 0) {
        return `booking with ID ${id} was removed successfully.`;
      } else {
        return `booking  with ID ${id} not found.`;
      }
    } catch (error) {
      throw new Error(`Error removing booking with ID ${id}: ${error.message}`);
    }
  }
}
