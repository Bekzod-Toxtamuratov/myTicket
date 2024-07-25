import { Model } from "sequelize-typescript";
import { Venue } from "../../venue/models/venue.model";
import { Seat_type } from "../../seat_type/models/seat_type.model";
interface SeatCreationAttr {
    sector: number;
    row_number: number;
    number: number;
    venueId: number;
    seat_type_id: number;
    location_in_schema: string;
}
export declare class Seat extends Model<Seat, SeatCreationAttr> {
    id: number;
    sector: number;
    row_number: number;
    number: number;
    venue: Venue;
    venueId: number;
    seat_type_id: number;
    location_in_schema: string;
    seat_type: Seat_type;
}
export {};
