import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Customer } from './models/customer.models';

@Injectable()
export class CustomerService {
  constructor(
    @InjectModel(Customer) private readonly CustomerRepo: typeof Customer
  ) {}

  // async create(createCustomerDto: CreateCustomerDto): Promise<Customer> {
  //   return this.CustomerRepo.create(createCustomerDto);
  // }
  async create(createCustomerDto: CreateCustomerDto): Promise<Customer> {
    // Implementation of the create method
      return this.CustomerRepo.create(createCustomerDto);
  }

  findAll() {
    return this.CustomerRepo.findAll();
  }

  async findOne(id: number) {
    const customer = await this.CustomerRepo.findByPk(id, {
      include: { all: true },
    });
    if (!customer) {
      throw new NotFoundException(`customer with ID ${id} not found`);
    }
    return customer;
  }

  async updateCustomer(
    id: number,
    updateCustomerDto: UpdateCustomerDto
  ): Promise<Customer> {
    const [numberOfAffectedRows, [updatedCustomer]] =
      await this.CustomerRepo.update(updateCustomerDto, {
        where: { id },
        returning: true,
      });
    if (numberOfAffectedRows === 0) {
      throw new NotFoundException(`customer with ID ${id} not found`);
    }
    return updatedCustomer;
  }

  async remove(id: number): Promise<string> {
    try {
      const affectedRows = await this.CustomerRepo.destroy({ where: { id } });
      if (affectedRows > 0) {
        return `customer with ID ${id} was removed successfully.`;
      } else {
        return `customer with ID ${id} not found.`;
      }
    } catch (error) {
      throw new Error(
        `Error removing customer with ID ${id}: ${error.message}`
      );
    }
  }
}
