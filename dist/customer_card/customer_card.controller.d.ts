import { CustomerCardService } from "./customer_card.service";
import { CreateCustomerCardDto } from "./dto/create-customer_card.dto";
import { UpdateCustomerCardDto } from "./dto/update-customer_card.dto";
import { customer_Card } from "./models/customer_card.models";
export declare class CustomerCardController {
    private readonly customerCardService;
    constructor(customerCardService: CustomerCardService);
    create(createCustomerCardDto: CreateCustomerCardDto): Promise<customer_Card>;
    findAll(): Promise<customer_Card[]>;
    findOne(id: string): Promise<customer_Card>;
    update(id: string, updateCustomerCardDto: UpdateCustomerCardDto): Promise<customer_Card>;
    remove(id: string): Promise<string>;
}
