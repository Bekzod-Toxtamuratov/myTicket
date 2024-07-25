import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { CustomerAddressService } from "./customer_address.service";
import { CreateCustomerAddressDto } from "./dto/create-customer_address.dto";
import { UpdateCustomerAddressDto } from "./dto/update-customer_address.dto";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { customer_address } from "./models/customer_address.models";

@Controller("customer-address")
@ApiTags("customer-address")
export class CustomerAddressController {
  constructor(
    private readonly customerAddressService: CustomerAddressService
  ) {}

  @ApiOperation({ summary: "create customer address" })
  @ApiResponse({
    status: 201,
    description: "The record has been successfully created.",
    type: customer_address,
  })
  @Post()
  create(@Body() createCustomerAddressDto: CreateCustomerAddressDto) {
    return this.customerAddressService.create(createCustomerAddressDto);
  }

  @ApiOperation({ summary: "getcustomer address" })
  @ApiResponse({
    status: 200,
    description: "The record has been successfully get",
    type: [customer_address],
  })
  @Get()
  findAll() {
    return this.customerAddressService.findAll();
  }

  @ApiOperation({ summary: "getcustomer byId address" })
  @ApiResponse({
    status: 200,
    description: "The record has been successfully get",
    type: customer_address,
  })
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.customerAddressService.findOne(+id);
  }

  @ApiOperation({ summary: "edit  customes_address" })
  @ApiResponse({
    status: 200,
    description: "The record has been successfully get",
    type: customer_address,
  })
  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateCustomerAddressDto: UpdateCustomerAddressDto
  ) {
    return this.customerAddressService.updateCustomer_address(
      +id,
      updateCustomerAddressDto
    );
  }

  @ApiOperation({ summary: "delete  customes_address" })
  @ApiResponse({
    status: 200,
    description: "The record has been successfully get",
    type: customer_address,
  })
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.customerAddressService.remove(+id);
  }
}
