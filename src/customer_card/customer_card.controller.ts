import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { CustomerCardService } from "./customer_card.service";
import { CreateCustomerCardDto } from "./dto/create-customer_card.dto";
import { UpdateCustomerCardDto } from "./dto/update-customer_card.dto";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { customer_Card } from "./models/customer_card.models";

@Controller("customer-card")
@ApiTags("customer-card")
export class CustomerCardController {
  constructor(private readonly customerCardService: CustomerCardService) {}

  @ApiOperation({ summary: "created customer card" })
  @ApiResponse({
    status: 201,
    description: "The created customer card",
    type: [customer_Card],
  })
  @Post()
  create(@Body() createCustomerCardDto: CreateCustomerCardDto) {
    return this.customerCardService.create(createCustomerCardDto);
  }

  @ApiOperation({ summary: "customer  getALL card" })
  @ApiResponse({
    status: 200,
    description: "customer  getALL card ",
    type: [customer_Card],
  })
  @Get()
  findAll() {
    return this.customerCardService.findAll();
  }

  @ApiOperation({ summary: "customer  get byID card" })
  @ApiResponse({
    status: 200,
    description: "customer  get ByID  card ",
    type: customer_Card,
  })
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.customerCardService.findOne(+id);
  }

  @ApiOperation({ summary: "customer  edit  card" })
  @ApiResponse({
    status: 200,
    description: "customer  edit  card ",
    type: customer_Card,
  })
  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateCustomerCardDto: UpdateCustomerCardDto
  ) {
    return this.customerCardService.updateCustomerCard(
      +id,
      updateCustomerCardDto
    );
  }

  @ApiOperation({ summary: "customer  delete  customer_card" })
  @ApiResponse({
    status: 200,
    description: "customer  delete   customer_card",
    type: customer_Card,
  })
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.customerCardService.remove(+id);
  }
}
