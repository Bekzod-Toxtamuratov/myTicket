import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { VenueTypeService } from "./venue_type.service";
import { CreateVenueTypeDto } from "./dto/create-venue_type.dto";
import { UpdateVenueTypeDto } from "./dto/update-venue_type.dto";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { Venue_type } from "./models/venue_type.model";

@Controller("venue-type")
@ApiTags("venue-type")
export class VenueTypeController {
  constructor(private readonly venueTypeService: VenueTypeService) {}

  @ApiOperation({ summary: "bu yerda post qilinad" })
  @ApiResponse({
    status: 201,
    description: "List of Venue_type",
    type: [Venue_type],
  })
  @Post()
  create(@Body() createVenueTypeDto: CreateVenueTypeDto) {
    return this.venueTypeService.create(createVenueTypeDto);
  }

  @ApiOperation({ summary: "bu yerda getALl qilinadi" })
  @ApiResponse({
    status: 200,
    description: "List of Venue_type",
    type: [Venue_type],
  })
  @Get()
  getAllVenueType() {
    return this.venueTypeService.getAllVenueType();
  }

  @ApiOperation({ summary: "bu yerda getById qilinadi" })
  @ApiResponse({
    status: 200,
    description: "List of Venue_type",
    type: Venue_type,
  })
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.venueTypeService.findOne(+id);
  }

  @ApiOperation({ summary: "bu yerda edit qilinadi" })
  @ApiResponse({
    status: 200,
    description: "List of Venue_type",
    type: Venue_type,
  })
  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateVenueTypeDto: UpdateVenueTypeDto
  ) {
    return this.venueTypeService.update(+id, updateVenueTypeDto);
  }

  @ApiOperation({ summary: "bu yerda delete qilinadi" })
  @ApiResponse({
    status: 200,
    description: "List of Venue_type",
    type: Venue_type,
  })
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.venueTypeService.remove(+id);
  }
}
