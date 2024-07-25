import { Model } from "sequelize-typescript";
interface SeatCreationAttr {
    name?: string;
    parent_event_type_id?: number;
}
export declare class EventType extends Model<EventType, SeatCreationAttr> {
    id: number;
    name: string;
    parent_event_type_id: {
        references: {
            model: "event_type";
            key: "id";
        };
    };
}
export {};
