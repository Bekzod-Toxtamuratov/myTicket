import { CustomerAddressService } from "./customer_address.service";
import { CreateCustomerAddressDto } from "./dto/create-customer_address.dto";
import { UpdateCustomerAddressDto } from "./dto/update-customer_address.dto";
import { customer_address } from "./models/customer_address.models";
export declare class CustomerAddressController {
    private readonly customerAddressService;
    constructor(customerAddressService: CustomerAddressService);
    create(createCustomerAddressDto: CreateCustomerAddressDto): Promise<customer_address>;
    findAll(): Promise<customer_address[]>;
    findOne(id: string): Promise<customer_address>;
    update(id: string, updateCustomerAddressDto: UpdateCustomerAddressDto): Promise<customer_address>;
    remove(id: string): Promise<string>;
}
