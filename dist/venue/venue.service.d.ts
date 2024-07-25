import { CreateVenueDto } from "./dto/create-venue.dto";
import { UpdateVenueDto } from "./dto/update-venue.dto";
import { Venue } from "./models/venue.model";
export declare class VenueService {
    private venueRepo;
    constructor(venueRepo: typeof Venue);
    create(createVenueDto: CreateVenueDto): Promise<Venue>;
    getAllVenue(): Promise<Venue[]>;
    findOne(id: number): Promise<Venue>;
    update(id: number, updateVenueDto: UpdateVenueDto): Promise<Venue>;
    remove(id: number): Promise<string>;
}
