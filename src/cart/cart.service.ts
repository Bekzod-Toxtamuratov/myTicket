import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateCartDto } from "./dto/create-cart.dto";
import { UpdateCartDto } from "./dto/update-cart.dto";
import { InjectModel } from "@nestjs/sequelize";
import { Cart } from "./models/cart.models";

@Injectable()
export class CartService {
  constructor(@InjectModel(Cart) private cartRepo: typeof Cart) {}
  create(createCartDto: CreateCartDto) {
    return this.cartRepo.create(createCartDto);
  }

  findAll() {
    return this.cartRepo.findAll({ include: { all: true } });
  }

  async findOne(id: number) {
    const booking = await this.cartRepo.findByPk(id, {
      include: { all: true },
    });
    if (!booking) {
      throw new NotFoundException(`booking with ID ${id} not found`);
    }
    return booking;
  }

  async updateCart(id: number, updateCartDto: UpdateCartDto): Promise<Cart> {
    const [numberOfAffectedRows, [updatedCart]] = await this.cartRepo.update(
      updateCartDto,
      {
        where: { id },
        returning: true,
      }
    );
    if (numberOfAffectedRows === 0) {
      throw new NotFoundException(`cart with ID ${id} not found`);
    }
    return updatedCart;
  }

  async remove(id: number) {
    try {
      const affectedRows = await this.cartRepo.destroy({
        where: { id },
      });
      if (affectedRows > 0) {
        return `cart with ID ${id} was removed successfully.`;
      } else {
        return `cart  with ID ${id} not found.`;
      }
    } catch (error) {
      throw new Error(`Error removing cart with ID ${id}: ${error.message}`);
    }
  }
}
