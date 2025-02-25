import { CreateSeatDto } from "./dto/create-seat.dto";
import { UpdateSeatDto } from "./dto/update-seat.dto";
import { Seat } from "./models/seat.model";
export declare class SeatService {
    private seatRepo;
    constructor(seatRepo: typeof Seat);
    create(createSeatDto: CreateSeatDto): Promise<Seat>;
    findAll(): Promise<Seat[]>;
    findOne(id: number): Promise<Seat>;
    updateSeat(id: number, updateSeatDto: UpdateSeatDto): Promise<Seat>;
    remove(id: number): Promise<string>;
}
