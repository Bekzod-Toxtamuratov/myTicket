import { PartialType } from "@nestjs/mapped-types";
import { CreateVenueDto } from "./create-venue.dto";

export class UpdateVenueDto extends PartialType(CreateVenueDto) {
  name?: string;
  address?: string;
  location?: string;
  site?: string;
  phone?: string;
  venue_typeId?: number;
  schema?: string;
  region_id?: number;
  district_id?: number;
}
