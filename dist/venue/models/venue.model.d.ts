import { Model } from "sequelize-typescript";
import { Venue_type } from "../../venue_type/models/venue_type.model";
import { Seat } from "../../seat/models/seat.model";
export declare class Venue extends Model<Venue> {
    id: number;
    name: string;
    address: string;
    location: string;
    site: string;
    phone: string;
    schema: string;
    region_id: number;
    district_id: number;
    seat: Seat;
    venue_type: Venue_type[];
}
