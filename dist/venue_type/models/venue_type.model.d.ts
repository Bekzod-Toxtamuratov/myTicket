import { Model } from "sequelize-typescript";
import { Venue } from "../../venue/models/venue.model";
interface Venue_typeCreationAttr {
    name: string;
}
export declare class Venue_type extends Model<Venue_type, Venue_typeCreationAttr> {
    id: number;
    name: string;
    venue: Venue[];
}
export {};
