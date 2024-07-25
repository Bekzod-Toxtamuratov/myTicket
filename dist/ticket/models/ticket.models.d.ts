import { Model } from "sequelize-typescript";
import { Cart } from "../../cart/models/cart.models";
import { Event } from "../../event/models/event.models";
import { Seat } from "../../seat/models/seat.model";
interface TicketCreationAttr {
    event_id: number;
    seat_id: number;
    status_id: number;
    price: number;
    service_free: number;
    ticket_type: number;
}
export declare class Ticket extends Model<Ticket, TicketCreationAttr> {
    id: number;
    price: number;
    service_free: number;
    ticket_type: number;
    event_id: number;
    seat_id: number;
    status_id: number;
    event: Event;
    seat: Seat;
    cart: Cart[];
}
export {};
