import { PartialType } from "@nestjs/swagger";
import CreateTicketDto from "./create-ticket.dto";

export class UpdateTicketDto extends PartialType(CreateTicketDto) {
  event_id: number;
  seat_id: number;
  status_id: number;

  price: number;
  service_free: number;
  ticket_type: number;
}
