import { Model } from "sequelize-typescript";
import { Seat } from "../../seat/models/seat.model";
interface Seat_typeCreationAttr {
    name: string;
}
export declare class Seat_type extends Model<Seat_type, Seat_typeCreationAttr> {
    id: number;
    name: string;
    seat: Seat;
}
export {};
