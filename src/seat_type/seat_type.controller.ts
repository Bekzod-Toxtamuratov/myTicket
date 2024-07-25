import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpStatus,
} from "@nestjs/common";
import { SeatTypeService } from "./seat_type.service";
import { CreateSeatTypeDto } from "./dto/create-seat_type.dto";
import { UpdateSeatTypeDto } from "./dto/update-seat_type.dto";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { Seat_type } from "./models/seat_type.model";
import { Seat } from "../seat/models/seat.model";

@Controller("seat-type")
@ApiTags("Seat-type")
export class SeatTypeController {
  constructor(private readonly seatTypeService: SeatTypeService) {}

  @ApiOperation({ summary: "Seat-type ni yaratish hisoblandi" })
  @ApiResponse({
    status: 201,
    description: "List of Seat-type",
    type: [Seat_type],
  })
  @Post()
  create(@Body() createSeatTypeDto: CreateSeatTypeDto) {
    return this.seatTypeService.create(createSeatTypeDto);
  }

  @ApiOperation({ summary: "Seat-type ni  hammasini korish" })
  @ApiResponse({
    status: 200,
    description: "List of Seat=type",
    type: [Seat_type],
  })
  @Get()
  findAll() {
    return this.seatTypeService.findAll();
  }

  @ApiOperation({
    summary: "Seat-type ni byId boyicha ko'rish hisoblandi",
  })
  @ApiResponse({
    status: 200,
    description: "List of Seat-type",
    type: Seat,
  })
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.seatTypeService.findOne(+id);
  }

  @ApiOperation({
    summary: "Seat-type ni edit qilish hisoblandi",
  })
  @ApiResponse({
    status: 200,
    description: "List of Seat-type",
    type: Seat,
  })
  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateSeatTypeDto: UpdateSeatTypeDto
  ) {
    return this.seatTypeService.updateSeatType(+id, updateSeatTypeDto);
  }
   
  @ApiOperation({
     summary: "Seat-type delete qilish hisoblandi",
  })
  @ApiResponse({
    status: 200,
    description: "List of Seat-type",
    type: Seat,
  })
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.seatTypeService.remove(+id);
  }
}
