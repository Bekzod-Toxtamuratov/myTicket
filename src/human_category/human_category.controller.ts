import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { HumanCategoryService } from "./human_category.service";
import { CreateHumanCategoryDto } from "./dto/create-human_category.dto";
import { UpdateHumanCategoryDto } from "./dto/update-human_category.dto";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { Human_category } from "./models/human_category.model";

@ApiTags("human_category")
@Controller("human-category")
export class HumanCategoryController {
  constructor(private readonly humanCategoryService: HumanCategoryService) {}

  @ApiOperation({ summary: "human_category ni yaratish hisoblandi" })
  @ApiResponse({
    status: 200,
    description: "List of Human_category",
    type: [Human_category],
  })
  @Post()
  create(@Body() createHumanCategoryDto: CreateHumanCategoryDto) {
    return this.humanCategoryService.create(createHumanCategoryDto);
  }

  @ApiOperation({ summary: "human_category ni  hammasini korish" })
  @ApiResponse({
    status: 200,
    description: "List of Human_category",
    type: [Human_category],
  })
  @Get()
  findAll() {
    return this.humanCategoryService.findAll();
  }

  @ApiOperation({
    summary: "human_category ni byId boyicha ko'rish hisoblandi",
  })
  @ApiResponse({
    status: 200,
    description: "List of Human_category",
    type: Human_category,
  })
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.humanCategoryService.findOne(+id);
  }

  @ApiOperation({ summary: "human_category ni Edit qilish" })
  @ApiResponse({
    status: 200,
    description: "List of Human_category",
    type: Human_category,
  })
  @Patch(":id")
  Human_categoryEdit(
    @Param("id") id: string,
    @Body() updateHumanCategoryDto: UpdateHumanCategoryDto
  ) {
    return this.humanCategoryService.updateHumanCategory(
      +id,
      updateHumanCategoryDto
    );
  }

  @ApiOperation({ summary: "human_category ni  delete  qilish hisoblandi" })
  @ApiResponse({
    status: 200,
    description: "List of Human_category",
    type: Human_category,
  })
  @Delete(":id")
  ixtiyoriyNom(@Param("id") id: string) {
    return this.humanCategoryService.remove(+id);
  }
}
