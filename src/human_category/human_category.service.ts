import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateHumanCategoryDto } from "./dto/create-human_category.dto";
import { UpdateHumanCategoryDto } from "./dto/update-human_category.dto";
import { InjectModel } from "@nestjs/sequelize";
import { Human_category } from "./models/human_category.model";
import { HumanCategoryModule } from "./human_category.module";

@Injectable()
export class HumanCategoryService {
  constructor(
    @InjectModel(Human_category)
    private humanCategoryRepo: typeof Human_category
  ) {}
  async create(createHumanCategoryDto: CreateHumanCategoryDto) {
    return this.humanCategoryRepo.create(createHumanCategoryDto);
  }

  async findAll() {
    return this.humanCategoryRepo.findAll({include:{all: true}});
  }

  async findOne(id: number) {
    const seat = await this.humanCategoryRepo.findByPk(id, {
      include: { all: true },
    });
    if (!seat) {
      throw new NotFoundException(`humanyCategory with ID ${id} not found`);
    }
    return seat;
  }

  async updateHumanCategory(
    id: number,
    updateHumanCategoryDto: UpdateHumanCategoryDto
  ): Promise<HumanCategoryModule> {
    try {
      const [numberOfAffectedRows, [updateHumanCategory]] =
        await this.humanCategoryRepo.update(updateHumanCategoryDto, {
          where: { id },
          returning: true,
        });
      if (numberOfAffectedRows === 0) {
        throw new NotFoundException(
          `HumanCategoryModule with ID ${id} not found`
        );
      }
      return updateHumanCategory;
    } catch (error) {
      throw error;
    }
  }
  async remove(id: number): Promise<string> {
    try {
      const affectedRows = await this.humanCategoryRepo.destroy({
        where: { id },
      });
      if (affectedRows > 0) {
        return `Human Category with ID ${id} was removed successfully.`;
      } else {
        return `Human Category with ID ${id} not found.`;
      }
    } catch (error) {
      throw new Error(
        `Error removing Human Category with ID ${id}: ${error.message}`
      );
    }
  }
}
