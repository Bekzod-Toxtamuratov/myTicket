import { TicketService } from "./ticket.service";
import CreateTicketDto from "./dto/create-ticket.dto";
import { UpdateTicketDto } from "./dto/update-ticket.dto";
import { Ticket } from "./models/ticket.models";
export declare class TicketController {
    private readonly ticketService;
    constructor(ticketService: TicketService);
    create(createTicketDto: CreateTicketDto): Promise<Ticket>;
    findAll(): Promise<Ticket[]>;
    findOne(id: string): Promise<Ticket>;
    update(id: string, updateTicketDto: UpdateTicketDto): Promise<Ticket>;
    remove(id: string): Promise<string>;
}
