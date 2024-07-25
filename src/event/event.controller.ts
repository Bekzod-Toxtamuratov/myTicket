import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
} from "@nestjs/common";
import { EventService } from "./event.service";
import { CreateEventDto } from "./dto/create-event.dto";
import { UpdateEventDto } from "./dto/update-event.dto";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import {
  FileFieldsInterceptor,
  FileInterceptor,
} from "@nestjs/platform-express";


@Controller("event")
@ApiTags("event")
export class EventController {
  constructor(private readonly eventService: EventService) {}

  @ApiOperation({ summary: "Create new event" })
  @ApiResponse({
    status: 201,
    description: "Event created",
    type: Event,
  })
  @Post()
  @UseInterceptors(FileInterceptor('image'))
  create(@Body() createEventDto: CreateEventDto, @UploadedFile() image: any) {
    return this.eventService.create(createEventDto, image);
  }


  // create(@Body() createEventDto: CreateEventDto) {
  //   return this.eventService.create(createEventDto);
  // }

  @ApiOperation({ summary: "getAll event" })
  @ApiResponse({
    status: 200,
    description: "Event get",
    type: Event,
  })
  @Get()
  findAll() {
    return this.eventService.findAll();
  }

  @ApiOperation({ summary: "get ById event" })
  @ApiResponse({
    status: 200,
    description: "Event get",
    type: Event,
  })
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.eventService.findOne(+id);
  }

  @ApiOperation({ summary: "edit ById event" })
  @ApiResponse({
    status: 200,
    description: "Event edit",
    type: Event,
  })
  @Patch(":id")
  update(@Param("id") id: string, @Body() updateEventDto: UpdateEventDto) {
    return this.eventService.update(+id, updateEventDto);
  }

  @ApiOperation({ summary: "delete ById event" })
  @ApiResponse({
    status: 200,
    description: "Event delete",
    type: Event,
  })
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.eventService.remove(+id);
  }
}
