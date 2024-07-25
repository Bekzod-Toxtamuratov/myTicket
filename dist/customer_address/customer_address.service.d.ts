import { CreateCustomerAddressDto } from "./dto/create-customer_address.dto";
import { UpdateCustomerAddressDto } from "./dto/update-customer_address.dto";
import { customer_address } from "./models/customer_address.models";
export declare class CustomerAddressService {
    private customer_addressRepo;
    constructor(customer_addressRepo: typeof customer_address);
    create(createCustomerAddressDto: CreateCustomerAddressDto): Promise<customer_address>;
    findAll(): Promise<customer_address[]>;
    findOne(id: number): Promise<customer_address>;
    updateCustomer_address(id: number, updateCustomerAddressDto: UpdateCustomerAddressDto): Promise<customer_address>;
    remove(id: number): Promise<string>;
}
