import { CreateVenueTypeDto } from "./dto/create-venue_type.dto";
import { UpdateVenueTypeDto } from "./dto/update-venue_type.dto";
import { Venue_type } from "./models/venue_type.model";
export declare class VenueTypeService {
    private venue_typeRepo;
    constructor(venue_typeRepo: typeof Venue_type);
    create(createVenueTypeDto: CreateVenueTypeDto): Promise<Venue_type>;
    getAllVenueType(): Promise<Venue_type[]>;
    findOne(id: number): Promise<Venue_type>;
    update(id: number, updateVenueTypeDto: UpdateVenueTypeDto): Promise<Venue_type>;
    remove(id: number): Promise<string>;
}
