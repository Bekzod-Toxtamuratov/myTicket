import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateCustomerAddressDto } from "./dto/create-customer_address.dto";
import { UpdateCustomerAddressDto } from "./dto/update-customer_address.dto";
import { InjectModel } from "@nestjs/sequelize";
import { customer_address } from "./models/customer_address.models";

@Injectable()
export class CustomerAddressService {
  constructor(
    @InjectModel(customer_address)
    private customer_addressRepo: typeof customer_address
  ) {}
  create(createCustomerAddressDto: CreateCustomerAddressDto) {
    return this.customer_addressRepo.create(createCustomerAddressDto);
  }

  findAll() {
    return this.customer_addressRepo.findAll();
  }

  async findOne(id: number) {
    const customers_address = await this.customer_addressRepo.findByPk(id, {
      include: { all: true },
    });
    if (!customers_address) {
      throw new NotFoundException(`customer_address with ID ${id} not found`);
    }
    return customers_address;
  }

  async updateCustomer_address(
    id: number,
    updateCustomerAddressDto: UpdateCustomerAddressDto
  ): Promise<customer_address> {
    const [numberOfAffectedRows, [updatedCustomersAddress]] =
      await this.customer_addressRepo.update(updateCustomerAddressDto, {
        where: { id },
        returning: true,
      });
    if (numberOfAffectedRows === 0) {
      throw new NotFoundException(`customer_address with ID ${id} not found`);
    }
    return updatedCustomersAddress;
  }

  async remove(id: number): Promise<string> {
    try {
      const affectedRows = await this.customer_addressRepo.destroy({
        where: { id },
      });
      if (affectedRows > 0) {
        return `customer_address with ID ${id} was removed successfully.`;
      } else {
        return `customer_address with ID ${id} not found.`;
      }
    } catch (error) {
      throw new Error(
        `Error removing customer_address with ID ${id}: ${error.message}`
      );
    }
  }
}
