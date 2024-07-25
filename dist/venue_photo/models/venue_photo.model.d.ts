import { Model } from "sequelize-typescript";
interface Venue_photoCreationAttr {
    image: string;
    venue_id: number;
    url: string;
}
export declare class Venue_photo extends Model<Venue_photo, Venue_photoCreationAttr> {
    id: number;
    venue_id: number;
    url: string;
    image: string;
}
export {};
