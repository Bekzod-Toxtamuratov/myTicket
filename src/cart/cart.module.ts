import { forwardRef, Module } from "@nestjs/common";
import { CartService } from "./cart.service";
import { CartController } from "./cart.controller";
import { SequelizeModule } from "@nestjs/sequelize";
import { Cart } from "./models/cart.models";
import { Ticket } from "../ticket/models/ticket.models";

@Module({
  imports: [SequelizeModule.forFeature([Cart])],
  controllers: [CartController],
  providers: [CartService],
})
export class CartModule {}
