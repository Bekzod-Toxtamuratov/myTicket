import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UploadedFile,
  UseInterceptors,
} from "@nestjs/common";
import { VenuePhotoService } from "./venue_photo.service";
import { CreateVenuePhotoDto } from "./dto/create-venue_photo.dto";
import { UpdateVenuePhotoDto } from "./dto/update-venue_photo.dto";
import { FileFieldsInterceptor, FileInterceptor } from "@nestjs/platform-express";

import {
  ApiOperation,
  ApiProperty,
  ApiResponse,
  ApiTags,
} from "@nestjs/swagger";
import { Venue_photo } from "./models/venue_photo.model";

@Controller("venue-photo")
@ApiTags("venue-photo")
export class VenuePhotoController {
  constructor(private readonly venuePhotoService: VenuePhotoService) {}

  @Post()
  @UseInterceptors(FileInterceptor('image'))
  create(
    @Body() createVenuePhotoDto: CreateVenuePhotoDto,
    @UploadedFile() image: any
  ) {
     return this.venuePhotoService.create(createVenuePhotoDto , image);
  }

  @ApiOperation({ summary: "Bu yerda getAll qilinadi" })
  @ApiResponse({
    status: 200,
    description: "The venue photo",
    type: [Venue_photo],
  })
  @Get()
  getAllVenueType() {
    return this.venuePhotoService.getAllVenuePhoto();
  }

  @ApiOperation({ summary: "Bu yerda getOne qilinadi" })
  @ApiResponse({
    status: 200,
    description: "The venue photo",
    type: Venue_photo,
  })
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.venuePhotoService.findOne(+id);
  }

  @ApiOperation({ summary: "Bu yerda editById qilinadi" })
  @ApiResponse({
    status: 200,
    description: "The venue photo",
    type: Venue_photo,
  })
  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateVenuePhotoDto: UpdateVenuePhotoDto
  ) {
    return this.venuePhotoService.update(+id, updateVenuePhotoDto);
  }

  @ApiOperation({ summary: "Bu yerda delteById qilinadi" })
  @ApiResponse({
    status: 200,
    description: "The venue photo",
    type: Venue_photo,
  })
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.venuePhotoService.remove(+id);
  }
}
