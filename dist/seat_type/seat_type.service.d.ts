import { CreateSeatTypeDto } from "./dto/create-seat_type.dto";
import { UpdateSeatTypeDto } from "./dto/update-seat_type.dto";
import { Seat_type } from "./models/seat_type.model";
export declare class SeatTypeService {
    private seat_typeRepo;
    constructor(seat_typeRepo: typeof Seat_type);
    create(createSeatTypeDto: CreateSeatTypeDto): Promise<Seat_type>;
    findAll(): Promise<Seat_type[]>;
    findOne(id: number): Promise<Seat_type>;
    updateSeatType(id: number, updateseatType: UpdateSeatTypeDto): Promise<Seat_type>;
    remove(id: number): Promise<string>;
}
