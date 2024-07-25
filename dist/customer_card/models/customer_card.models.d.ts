import { Model } from "sequelize-typescript";
import { Customer } from "../../customer/models/customer.models";
interface customer_cardCreationAttr {
    name: string;
    phone_number: string;
    customer_id: number;
    number: number;
    year: string;
    month: string;
    is_active: boolean;
    is_main: boolean;
}
export declare class customer_Card extends Model<customer_Card, customer_cardCreationAttr> {
    id: number;
    name: string;
    customer_id: number;
    phone_number: string;
    number: number;
    year: string;
    month: string;
    is_active: boolean;
    is_main: boolean;
    customer: Customer;
}
export {};
