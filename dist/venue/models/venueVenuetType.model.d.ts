import { Model } from "sequelize-typescript";
interface IVenueVenueCreationAttr {
    venueId: number;
    venue_TypeId: number;
}
export declare class VenueVenueType extends Model<VenueVenueType, IVenueVenueCreationAttr> {
    venueId: number;
    venue_TypeId: number;
}
export {};
