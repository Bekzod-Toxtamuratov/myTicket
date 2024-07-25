import { Model } from "sequelize-typescript";
interface Human_categoryCreationAttr {
    name: string;
    start_age: number;
    finish_age: number;
    gender: string;
}
export declare class Human_category extends Model<Human_category, Human_categoryCreationAttr> {
    id: number;
    name: string;
    start_age: number;
    finish_age: number;
    gender: string;
}
export {};
