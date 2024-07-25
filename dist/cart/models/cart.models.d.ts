import { Model } from "sequelize-typescript";
import { Customer } from "../../customer/models/customer.models";
import { Ticket } from "../../ticket/models/ticket.models";
interface CartCreationAttr {
    ticket_id: number;
    customer_id: number;
    createdAt: Date;
    finishedAt: Date;
    status_id: number;
}
export declare class Cart extends Model<Cart, CartCreationAttr> {
    id: number;
    ticket_id: number;
    customer_id: number;
    status_id: number;
    createdAt: Date;
    finishedAt: Date;
    customer: Customer;
    ticket: Ticket;
}
export {};
