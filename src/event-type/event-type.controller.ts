import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { EventTypeService } from "./event-type.service";
import { CreateEventTypeDto } from "./dto/create-event-type.dto";
import { UpdateEventTypeDto } from "./dto/update-event-type.dto";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { EventType } from "./models/event-type.models";

@Controller("event-type")
@ApiTags("Event_type")
export class EventTypeController {
  constructor(private readonly eventTypeService: EventTypeService) {}

  @ApiOperation({ summary: "bu yerda post qilish hisoblanadi" })
  @ApiResponse({
    status: 201,
    description: "List of Event_type",
    type: [EventType],
  })
  @Post()
  create(@Body() createEventTypeDto: CreateEventTypeDto) {
    return this.eventTypeService.create(createEventTypeDto);
  }

  @ApiOperation({ summary: "bu yerda getALl qilish hisoblanadi" })
  @ApiResponse({
    status: 200,
    description: "List of Event_type",
    type: [EventType],
  })
  @Get()
  findAll() {
    return this.eventTypeService.findAll();
  }

  @ApiOperation({ summary: "bu yerda getById qilish hisoblanadi" })
  @ApiResponse({
    status: 200,
    description: "List of Event_type",
    type: EventType,
  })
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.eventTypeService.findOne(+id);
  }

  @ApiOperation({ summary: "bu yerda edit qilish hisoblanadi" })
  @ApiResponse({
    status: 200,
    description: "List of Event_type",
    type: EventType,
  })
  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateEventTypeDto: UpdateEventTypeDto
  ) {
    return this.eventTypeService.update(+id, updateEventTypeDto);
  }

  @ApiOperation({ summary: "bu yerda delete qilish hisoblanadi" })
  @ApiResponse({
    status: 200,
    description: "List of Event_type",
    type: EventType,
  })
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.eventTypeService.remove(+id);
  }
}
