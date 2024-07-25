import { Model } from "sequelize-typescript";
interface BookingCreationAttr {
    cart_id: number;
    createAt: Date;
    finished: Date;
    payment_method_id: number;
    delevery_method_id: number;
    discount_coupon_id: number;
    status_id: number;
}
export declare class Booking extends Model<Booking, BookingCreationAttr> {
    id: number;
    cart_id: number;
    createAt: Date;
    finished: Date;
    payment_method_id: number;
    delevery_method_id: number;
    discount_coupon_id: number;
    status_id: number;
}
export {};
