import { forwardRef, Module } from "@nestjs/common";
import { TicketService } from "./ticket.service";
import { TicketController } from "./ticket.controller";
import { Sequelize } from "sequelize-typescript";
import { SequelizeModule } from "@nestjs/sequelize";
import { Ticket } from "./models/ticket.models";
import { Cart } from "../cart/models/cart.models";

@Module({
  imports: [SequelizeModule.forFeature([Ticket])],
  controllers: [TicketController],
  providers: [TicketService],
})
export class TicketModule {}
