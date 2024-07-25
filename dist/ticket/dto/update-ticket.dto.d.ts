import CreateTicketDto from "./create-ticket.dto";
declare const UpdateTicketDto_base: import("@nestjs/common").Type<Partial<CreateTicketDto>>;
export declare class UpdateTicketDto extends UpdateTicketDto_base {
    event_id: number;
    seat_id: number;
    status_id: number;
    price: number;
    service_free: number;
    ticket_type: number;
}
export {};
