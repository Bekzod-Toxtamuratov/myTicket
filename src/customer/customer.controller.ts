import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { CustomerService } from "./customer.service";
import { CreateCustomerDto } from "./dto/create-customer.dto";
import { UpdateCustomerDto } from "./dto/update-customer.dto";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { Customer } from "./models/customer.models";

@Controller("customer")
@ApiTags("customer")
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @ApiOperation({ summary: "Create new customer" })
  @ApiResponse({
    status: 201,
    description: "The record has been successfully created.",
    type: Customer,
  })
  @Post()
  create(@Body() createCustomerDto: CreateCustomerDto) {
    return this.customerService.create(createCustomerDto);
  }

  @ApiOperation({ summary: "get All customer" })
  @ApiResponse({
    status: 200,
    description: "get All customers",
    type: Customer,
  })
  @Get()
  findAll() {
    return this.customerService.findAll();
  }

  @ApiOperation({ summary: "get byID customer" })
  @ApiResponse({
    status: 200,
    description: "get byId customers",
    type: Customer,
  })
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.customerService.findOne(+id);
  }

  @ApiOperation({ summary: "edit byID customer" })
  @ApiResponse({
    status: 200,
    description: "edit byId customers",
    type: Customer,
  })
  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateCustomerDto: UpdateCustomerDto
  ) {
    return this.customerService.updateCustomer(+id, updateCustomerDto);
  }

  @ApiOperation({ summary: "delete byID customer" })
  @ApiResponse({
    status: 200,
    description: "delete byId customers",
    type: Customer,
  })
  @Delete(":id")
  async remove(@Param("id") id: string) {
    return this.customerService.remove(+id);
  }
}
