import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { SeatService } from "./seat.service";
import { CreateSeatDto } from "./dto/create-seat.dto";
import { UpdateSeatDto } from "./dto/update-seat.dto";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { Seat } from "./models/seat.model";

@ApiTags("Seat")
@Controller("seat")
export class SeatController {
  constructor(private readonly seatService: SeatService) {}

  @ApiOperation({ summary: "Seat ni yaratish hisoblandi" })
  @ApiResponse({
    status: 200,
    description: "List of Seat",
    type: [Seat],
  })
  @Post()
  create(@Body() createSeatDto: CreateSeatDto) {
    return this.seatService.create(createSeatDto);
  }

  @ApiOperation({ summary: "Seat ni  hammasini korish" })
  @ApiResponse({
    status: 200,
    description: "List of Seat",
    type: [Seat],
  })
  @Get()
  findAll() {
    return this.seatService.findAll();
  }

  @ApiOperation({
    summary: "Seat ni byId boyicha ko'rish hisoblandi",
  })
  @ApiResponse({
    status: 200,
    description: "List of Seat",
    type: Seat,
  })
  @Get(":id")
  findOne(@Param("id") id: number) {
    return this.seatService.findOne(id);
  }

  @ApiOperation({ summary: "Seat ni Edit qilish" })
  @ApiResponse({
    status: 200,
    description: "List of Seat",
    type: Seat,
  })
  @Patch(":id")
  updateIXtiyoriy(
    @Param("id") id: string,
    @Body() updateSeatDto: UpdateSeatDto
  ) {
    return this.seatService.updateSeat(+id, updateSeatDto);
  }

  @ApiOperation({ summary: "Seat ni delte qilish" })
  @ApiResponse({
    status: 200,
    description: "List of Seat",
    type: Seat,
  })
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.seatService.remove(+id);
  }
}
