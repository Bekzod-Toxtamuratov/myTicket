import { CreateCustomerCardDto } from "./create-customer_card.dto";
declare const UpdateCustomerCardDto_base: import("@nestjs/common").Type<Partial<CreateCustomerCardDto>>;
export declare class UpdateCustomerCardDto extends UpdateCustomerCardDto_base {
    first_name: string;
    last_name: string;
    phone_name: string;
    hashed_password: string;
    email: string;
    birth_date: string;
    gender: string;
    customer_lang_id: number;
    hashed_refresh_token: string;
}
export {};
