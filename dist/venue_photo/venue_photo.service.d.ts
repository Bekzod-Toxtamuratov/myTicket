import { CreateVenuePhotoDto } from "./dto/create-venue_photo.dto";
import { UpdateVenuePhotoDto } from "./dto/update-venue_photo.dto";
import { Venue_photo } from "./models/venue_photo.model";
import { FileService } from "../file/file.service";
export declare class VenuePhotoService {
    private venue_photoRepo;
    private readonly fileService;
    constructor(venue_photoRepo: typeof Venue_photo, fileService: FileService);
    create(createVenuePhotoDto: CreateVenuePhotoDto, image: any): Promise<Venue_photo>;
    getAllVenuePhoto(): Promise<Venue_photo[]>;
    findOne(id: number): Promise<Venue_photo>;
    update(id: number, updateVenuePhotoDto: UpdateVenuePhotoDto): Promise<Venue_photo>;
    remove(id: number): Promise<string>;
}
