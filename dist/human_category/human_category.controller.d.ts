import { HumanCategoryService } from "./human_category.service";
import { CreateHumanCategoryDto } from "./dto/create-human_category.dto";
import { UpdateHumanCategoryDto } from "./dto/update-human_category.dto";
import { Human_category } from "./models/human_category.model";
export declare class HumanCategoryController {
    private readonly humanCategoryService;
    constructor(humanCategoryService: HumanCategoryService);
    create(createHumanCategoryDto: CreateHumanCategoryDto): Promise<Human_category>;
    findAll(): Promise<Human_category[]>;
    findOne(id: string): Promise<Human_category>;
    Human_categoryEdit(id: string, updateHumanCategoryDto: UpdateHumanCategoryDto): Promise<import("src/human_category/human_category.module").HumanCategoryModule>;
    ixtiyoriyNom(id: string): Promise<string>;
}
