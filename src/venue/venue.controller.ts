import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { VenueService } from "./venue.service";
import { CreateVenueDto } from "./dto/create-venue.dto";
import { UpdateVenueDto } from "./dto/update-venue.dto";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { Venue } from "./models/venue.model";

@Controller("venue")
@ApiTags("Venue")
export class VenueController {
  constructor(private readonly venueService: VenueService) {}

  @ApiOperation({ summary: "Post qilinadi bu yerda" })
  @ApiResponse({
    status: 201,
    description: "List of Veues",
    type: [Venue],
  })
  @Post()
  Ixtiyoriy(@Body() createVenueDto: CreateVenueDto) {
    return this.venueService.create(createVenueDto);
  }

  @ApiOperation({ summary: "get qilindi  bu yerda" })
  @ApiResponse({
    status: 200,
    description: "List of Veues",
    type: [Venue],
  })
  @Get()
  findAll() {
    return this.venueService.getAllVenue();
  }

  @ApiOperation({
    summary: "get id boyicha obkelib beradi bizga qilindi  bu yerda",
  })
  @ApiResponse({
    status: 200,
    description: "List of Veues",
    type: Venue,
  })
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.venueService.findOne(+id);
  }

  @ApiOperation({
    summary: "edit id boyicha edit qilib  beradi bizga qilindi  bu yerda",
  })
  @ApiResponse({
    status: 200,
    description: "List of Veues",
    type: Venue,
  })
  @Patch(":id")
  update(@Param("id") id: string, @Body() updateVenueDto: UpdateVenueDto) {
    return this.venueService.update(+id, updateVenueDto);
  }

  @ApiOperation({
    summary: "delete  id boyicha edit qilib  beradi bizga qilindi  bu yerda",
  })
  @ApiResponse({
    status: 200,
    description: "List of Veues",
    type: Venue,
  })
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.venueService.remove(+id);
  }
}
