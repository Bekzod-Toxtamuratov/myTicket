import { VenuePhotoService } from "./venue_photo.service";
import { CreateVenuePhotoDto } from "./dto/create-venue_photo.dto";
import { UpdateVenuePhotoDto } from "./dto/update-venue_photo.dto";
import { Venue_photo } from "./models/venue_photo.model";
export declare class VenuePhotoController {
    private readonly venuePhotoService;
    constructor(venuePhotoService: VenuePhotoService);
    create(createVenuePhotoDto: CreateVenuePhotoDto, image: any): Promise<Venue_photo>;
    getAllVenueType(): Promise<Venue_photo[]>;
    findOne(id: string): Promise<Venue_photo>;
    update(id: string, updateVenuePhotoDto: UpdateVenuePhotoDto): Promise<Venue_photo>;
    remove(id: string): Promise<string>;
}
