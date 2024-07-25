import CreateTicketDto from "./dto/create-ticket.dto";
import { UpdateTicketDto } from "./dto/update-ticket.dto";
import { Ticket } from "./models/ticket.models";
export declare class TicketService {
    private readonly ticketRepo;
    constructor(ticketRepo: typeof Ticket);
    create(createTicketDto: CreateTicketDto): Promise<Ticket>;
    findAll(): Promise<Ticket[]>;
    findOne(id: number): Promise<Ticket>;
    updateTicket(id: number, updateTicketDto: UpdateTicketDto): Promise<Ticket>;
    remove(id: number): Promise<string>;
}
