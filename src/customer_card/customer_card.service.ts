import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateCustomerCardDto } from "./dto/create-customer_card.dto";
import { UpdateCustomerCardDto } from "./dto/update-customer_card.dto";
import { InjectModel } from "@nestjs/sequelize";
import { customer_Card } from "./models/customer_card.models";

@Injectable()
export class CustomerCardService {
  constructor(
    @InjectModel(customer_Card) private customer_cardRepo: typeof customer_Card
  ) {}

  create(createCustomerCardDto: CreateCustomerCardDto) {
    return this.customer_cardRepo.create(createCustomerCardDto);
  }

  findAll() {
    return this.customer_cardRepo.findAll();
  }

  async findOne(id: number) {
    const seat = await this.customer_cardRepo.findByPk(id, {
      include: { all: true },
    });
    if (!seat) {
      throw new NotFoundException(`customer_card with ID ${id} not found`);
    }
    return seat;
  }

  async updateCustomerCard(
    id: number,
    updateCustomerCardDto: UpdateCustomerCardDto
  ): Promise<customer_Card> {
    const [numberOfAffectedRows, [updatedCustomer_card]] =
      await this.customer_cardRepo.update(updateCustomerCardDto, {
        where: { id },
        returning: true,
      });
    if (numberOfAffectedRows === 0) {
      throw new NotFoundException(`customer_card with ID ${id} not found`);
    }
    return updatedCustomer_card;
  }

  async remove(id: number) {
    try {
      const affectedRows = await this.customer_cardRepo.destroy({
        where: { id },
      });
      if (affectedRows > 0) {
        return `customer_card with ID ${id} was removed successfully.`;
      } else {
        return `customer_card  with ID ${id} not found.`;
      }
    } catch (error) {
      throw new Error(
        `Error removing customer_card with ID ${id}: ${error.message}`
      );
    }
  }
}
