import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { BookingService } from "./booking.service";
import { CreateBookingDto } from "./dto/create-booking.dto";
import { UpdateBookingDto } from "./dto/update-booking.dto";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { Booking } from "./models/booking.models";

@Controller("booking")
@ApiTags("booking")
export class BookingController {
  constructor(private readonly bookingService: BookingService) {}

  @ApiOperation({ summary: "Bu yerda post qilamiz" })
  @ApiResponse({
    status: 201,
    description: "List of Booking",
    type: Booking,
  })
  @Post()
  create(@Body() createBookingDto: CreateBookingDto) {
    return this.bookingService.create(createBookingDto);
  }

  @ApiOperation({ summary: "Bu yerda getALL qilamiz" })
  @ApiResponse({
    status: 200,
    description: "List of Booking",
    type: [Booking],
  })
  @Get()
  findAll() {
    return this.bookingService.findAll();
  }

  @ApiOperation({ summary: "Bu yerda getBYID qilamiz" })
  @ApiResponse({
    status: 200,
    description: "List of Booking",
    type: Booking,
  })
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.bookingService.findOne(+id);
  }

  @ApiOperation({ summary: "Bu yerda editBYID qilamiz" })
  @ApiResponse({
    status: 200,
    description: "List of Booking",
    type: Booking,
  })
  @Patch(":id")
  update(@Param("id") id: string, @Body() updateBookingDto: UpdateBookingDto) {
    return this.bookingService.updateBooking(+id, updateBookingDto);
  }

  @ApiOperation({ summary: "Bu yerda deleteBYID qilamiz" })
  @ApiResponse({
    status: 200,
    description: "List of Booking",
    type: Booking,
  })
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.bookingService.remove(+id);
  }
}
