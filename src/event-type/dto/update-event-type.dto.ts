import { PartialType } from "@nestjs/swagger";
import { CreateEventTypeDto } from "./create-event-type.dto";

// export class UpdateEventTypeDto {
//   name?: string;
//   parent_event_type_id?: number;
// }

export class UpdateEventTypeDto {
  name?: string;
//   parent_event_type_id?:
//     | number
//     | { references: { model: string; key: string } };
// }


}