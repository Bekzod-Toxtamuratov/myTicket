import { EventTypeService } from "./event-type.service";
import { CreateEventTypeDto } from "./dto/create-event-type.dto";
import { UpdateEventTypeDto } from "./dto/update-event-type.dto";
import { EventType } from "./models/event-type.models";
export declare class EventTypeController {
    private readonly eventTypeService;
    constructor(eventTypeService: EventTypeService);
    create(createEventTypeDto: CreateEventTypeDto): Promise<EventType>;
    findAll(): Promise<EventType[]>;
    findOne(id: string): Promise<EventType>;
    update(id: string, updateEventTypeDto: UpdateEventTypeDto): Promise<import("src/event-type/event-type.module").EventTypeModule>;
    remove(id: string): Promise<string>;
}
