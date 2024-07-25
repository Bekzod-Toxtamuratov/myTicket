import { CreateEventTypeDto } from "./dto/create-event-type.dto";
import { UpdateEventTypeDto } from "./dto/update-event-type.dto";
import { EventType } from "./models/event-type.models";
import { EventTypeModule } from "./event-type.module";
export declare class EventTypeService {
    private readonly evenyTypeRepo;
    constructor(evenyTypeRepo: typeof EventType);
    create(createEventTypeDto: CreateEventTypeDto): Promise<EventType>;
    findAll(): Promise<EventType[]>;
    findOne(id: number): Promise<EventType>;
    update(id: number, updateEventTypeDto: UpdateEventTypeDto): Promise<EventTypeModule>;
    remove(id: number): Promise<string>;
}
