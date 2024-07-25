import { Model } from "sequelize-typescript";
import { Customer } from "../../customer/models/customer.models";
interface customer_addressADDressCreationAttr {
    customer_id: number;
    name: string;
    country_id: number;
    region_id: number;
    disctric_id: number;
    street: string;
    house: string;
    flat: string;
    location: string;
    post_index: string;
    info: string;
}
export declare class customer_address extends Model<customer_address, customer_addressADDressCreationAttr> {
    id: number;
    name: string;
    country_id: number;
    customer_id: number;
    customer: Customer;
    region_id: number;
    disctric_id: number;
    house: string;
    street: string;
    flat: string;
    location: string;
    post_index: string;
    info: string;
}
export {};
