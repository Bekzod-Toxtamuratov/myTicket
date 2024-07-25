import { CreateCustomerCardDto } from "./dto/create-customer_card.dto";
import { UpdateCustomerCardDto } from "./dto/update-customer_card.dto";
import { customer_Card } from "./models/customer_card.models";
export declare class CustomerCardService {
    private customer_cardRepo;
    constructor(customer_cardRepo: typeof customer_Card);
    create(createCustomerCardDto: CreateCustomerCardDto): Promise<customer_Card>;
    findAll(): Promise<customer_Card[]>;
    findOne(id: number): Promise<customer_Card>;
    updateCustomerCard(id: number, updateCustomerCardDto: UpdateCustomerCardDto): Promise<customer_Card>;
    remove(id: number): Promise<string>;
}
