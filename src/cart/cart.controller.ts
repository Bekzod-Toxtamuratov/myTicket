import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { CartService } from "./cart.service";
import { CreateCartDto } from "./dto/create-cart.dto";
import { UpdateCartDto } from "./dto/update-cart.dto";
import { ApiOperation, ApiResponse } from "@nestjs/swagger";
import { Cart } from "./models/cart.models";

@Controller("cart")
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @ApiOperation({ summary: "bu yerda post qilinadi" })
  @ApiResponse({
    status: 201,
    description: "List of Cart",
    type: Cart,
  })
  @Post()
  create(@Body() createCartDto: CreateCartDto) {
    return this.cartService.create(createCartDto);
  }

  @ApiOperation({ summary: "bu yerda getALL qilinadi" })
  @ApiResponse({
    status: 200,
    description: "List of Cart",
    type: Cart,
  })
  @Get()
  findAll() {
    return this.cartService.findAll();
  }

  @ApiOperation({ summary: "bu yerda getByID qilinadi" })
  @ApiResponse({
    status: 200,
    description: "List of Cart",
    type: Cart,
  })
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.cartService.findOne(+id);
  }

  @ApiOperation({ summary: "bu yerda editQilinadi qilinadi" })
  @ApiResponse({
    status: 200,
    description: "List of Cart",
    type: Cart,
  })
  @Patch(":id")
  update(@Param("id") id: string, @Body() updateCartDto: UpdateCartDto) {
    return this.cartService.updateCart(+id, updateCartDto);
  }

  @ApiOperation({ summary: "bu yerda delete qilinadi" })
  @ApiResponse({
    status: 200,
    description: "List of Cart",
    type: Cart,
  })
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.cartService.remove(+id);
  }
}
