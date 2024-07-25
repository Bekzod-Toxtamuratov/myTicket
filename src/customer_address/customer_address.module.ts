import { Module } from "@nestjs/common";
import { CustomerAddressService } from "./customer_address.service";
import { CustomerAddressController } from "./customer_address.controller";
import { SequelizeModule } from "@nestjs/sequelize";
import { customer_address } from "./models/customer_address.models";
import { Customer } from "../customer/models/customer.models";

@Module({
  imports: [SequelizeModule.forFeature([customer_address])],
  controllers: [CustomerAddressController],
  providers: [CustomerAddressService],
})
export class CustomerAddressModule {}
