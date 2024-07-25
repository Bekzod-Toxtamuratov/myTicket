import { SeatService } from "./seat.service";
import { CreateSeatDto } from "./dto/create-seat.dto";
import { UpdateSeatDto } from "./dto/update-seat.dto";
import { Seat } from "./models/seat.model";
export declare class SeatController {
    private readonly seatService;
    constructor(seatService: SeatService);
    create(createSeatDto: CreateSeatDto): Promise<Seat>;
    findAll(): Promise<Seat[]>;
    findOne(id: number): Promise<Seat>;
    updateIXtiyoriy(id: string, updateSeatDto: UpdateSeatDto): Promise<Seat>;
    remove(id: string): Promise<string>;
}
