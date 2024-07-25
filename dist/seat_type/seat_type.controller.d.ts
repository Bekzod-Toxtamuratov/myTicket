import { SeatTypeService } from "./seat_type.service";
import { CreateSeatTypeDto } from "./dto/create-seat_type.dto";
import { UpdateSeatTypeDto } from "./dto/update-seat_type.dto";
import { Seat_type } from "./models/seat_type.model";
export declare class SeatTypeController {
    private readonly seatTypeService;
    constructor(seatTypeService: SeatTypeService);
    create(createSeatTypeDto: CreateSeatTypeDto): Promise<Seat_type>;
    findAll(): Promise<Seat_type[]>;
    findOne(id: string): Promise<Seat_type>;
    update(id: string, updateSeatTypeDto: UpdateSeatTypeDto): Promise<Seat_type>;
    remove(id: string): Promise<string>;
}
