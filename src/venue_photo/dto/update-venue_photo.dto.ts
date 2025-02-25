import { PartialType } from '@nestjs/mapped-types';
import { CreateVenuePhotoDto } from './create-venue_photo.dto';

export class UpdateVenuePhotoDto extends PartialType(CreateVenuePhotoDto) {
   venue_id?: number;
   url?:string;
}
