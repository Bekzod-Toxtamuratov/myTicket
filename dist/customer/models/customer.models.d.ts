import { Model } from "sequelize-typescript";
interface CustomerCreationAttr {
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
export declare class Customer extends Model<Customer, CustomerCreationAttr> {
    id: number;
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
