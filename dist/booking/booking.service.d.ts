import { CreateBookingDto } from "./dto/create-booking.dto";
import { UpdateBookingDto } from "./dto/update-booking.dto";
import { Booking } from "./models/booking.models";
export declare class BookingService {
    private bookingRepo;
    constructor(bookingRepo: typeof Booking);
    create(createBookingDto: CreateBookingDto): Promise<Booking>;
    findAll(): Promise<Booking[]>;
    findOne(id: number): Promise<Booking>;
    updateBooking(id: number, updateBookingDto: UpdateBookingDto): Promise<Booking>;
    remove(id: number): Promise<string>;
}
