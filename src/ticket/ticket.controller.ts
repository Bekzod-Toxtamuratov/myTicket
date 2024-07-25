import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { TicketService } from "./ticket.service";
import CreateTicketDto from "./dto/create-ticket.dto";
import { UpdateTicketDto } from "./dto/update-ticket.dto";
import {
  ApiOkResponse,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from "@nestjs/swagger";
import { Ticket } from "./models/ticket.models";

@Controller("ticket")
@ApiTags("ticket")
export class TicketController {
  constructor(private readonly ticketService: TicketService) {}

  @ApiOperation({ summary: "Post qilinadi bu yerda" })
  @ApiResponse({
    status: 201,
    description: "List of Ticket",
    type: [Ticket],
  })
  @Post()
  create(@Body() createTicketDto: CreateTicketDto) {
    return this.ticketService.create(createTicketDto);
  }

  @ApiOperation({ summary: "getALl qilinadi bu yerda" })
  @ApiResponse({
    status: 200,
    description: "List of Ticket",
    type: [Ticket],
  })
  @Get()
  findAll() {
    return this.ticketService.findAll();
  }

  @ApiOperation({ summary: "get ById qilinadi bu yerda" })
  @ApiResponse({
    status: 200,
    description: "List of Ticket",
    type: Ticket,
  })
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.ticketService.findOne(+id);
  }

  @ApiOperation({ summary: "edit  qilinadi bu yerda" })
  @ApiResponse({
    status: 200,
    description: "List of Ticket",
    type: Ticket,
  })
  @Patch(":id")
  update(@Param("id") id: string, @Body() updateTicketDto: UpdateTicketDto) {
    return this.ticketService.updateTicket(+id, updateTicketDto);
  }

  @ApiOperation({ summary: "delete  qilinadi bu yerda" })
  @ApiResponse({
    status: 200,
    description: "List of Ticket",
    type: Ticket,
  })
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.ticketService.remove(+id);
  }
}
