import { CreateEventDto } from "./dto/create-event.dto";
import { UpdateEventDto } from "./dto/update-event.dto";
import { Event } from "./models/event.models";
import { FileService } from "../file/file.service";
export declare class EventService {
    private eventRepo;
    private readonly fileService;
    constructor(eventRepo: typeof Event, fileService: FileService);
    create(createEventDto: CreateEventDto, image: any): Promise<Event>;
    findAll(): Promise<Event[]>;
    findOne(id: number): Promise<Event>;
    update(id: number, updateEventDto: UpdateEventDto): Promise<Event>;
    remove(id: number): Promise<string>;
}
