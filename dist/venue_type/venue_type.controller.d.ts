import { VenueTypeService } from "./venue_type.service";
import { CreateVenueTypeDto } from "./dto/create-venue_type.dto";
import { UpdateVenueTypeDto } from "./dto/update-venue_type.dto";
import { Venue_type } from "./models/venue_type.model";
export declare class VenueTypeController {
    private readonly venueTypeService;
    constructor(venueTypeService: VenueTypeService);
    create(createVenueTypeDto: CreateVenueTypeDto): Promise<Venue_type>;
    getAllVenueType(): Promise<Venue_type[]>;
    findOne(id: string): Promise<Venue_type>;
    update(id: string, updateVenueTypeDto: UpdateVenueTypeDto): Promise<Venue_type>;
    remove(id: string): Promise<string>;
}
