import { Model } from "sequelize-typescript";
interface EvenCreationAttr {
    name: string;
    photo: string;
    start_date: string;
    start_time: Date;
    finish_date: string;
    finish_time: string;
    info: string;
    language_id: number;
    even_type_id: number;
    human_category_id: number;
    venue_id: number;
    realese_data: string;
    image: string;
}
export declare class Event extends Model<Event, EvenCreationAttr> {
    id: number;
    name: string;
    image: string;
    photo: string;
    start_date: string;
    start_time: Date;
    finish_date: string;
    finish_time: string;
    info: string;
    realese_data: string;
    even_type_id: number;
    venue_id: number;
    human_category_id: number;
}
export {};
