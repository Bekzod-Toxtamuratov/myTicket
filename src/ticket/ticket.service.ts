import { Injectable, NotFoundException } from "@nestjs/common";
import CreateTicketDto from "./dto/create-ticket.dto";
import { UpdateTicketDto } from "./dto/update-ticket.dto";
import { InjectModel } from "@nestjs/sequelize";
import { Ticket } from "./models/ticket.models";

@Injectable()
export class TicketService {
  constructor(
    @InjectModel(Ticket) private readonly ticketRepo: typeof Ticket
  ) {}

  create(createTicketDto: CreateTicketDto) {
    return this.ticketRepo.create(createTicketDto);
  }

  findAll() {
    return this.ticketRepo.findAll({ include: { all: true } });
  }
  async findOne(id: number) {
    const ticket = await this.ticketRepo.findByPk(id, {
      include: { all: true },
    });
    if (!ticket) {
      throw new NotFoundException(`ticket with ID ${id} not found`);
    }
    return ticket;
  }
  async updateTicket(
    id: number,
    updateTicketDto: UpdateTicketDto
  ): Promise<Ticket> {
    const [numberOfAffectedRows, [updatedTicket]] =
      await this.ticketRepo.update(updateTicketDto, {
        where: { id },
        returning: true,
      });
    if (numberOfAffectedRows === 0) {
      throw new NotFoundException(`ticket with ID ${id} not found`);
    }
    return updatedTicket;
  }

  async remove(id: number): Promise<string> {
    try {
      const affectedRows = await this.ticketRepo.destroy({ where: { id } });
      if (affectedRows > 0) {
        return `ticket with ID ${id} was removed successfully.`;
      } else {
        return `ticket with ID ${id} not found.`;
      }
    } catch (error) {
      throw new Error(`Error removing ticket with ID ${id}: ${error.message}`);
    }
  }
}
