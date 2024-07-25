import { CreateHumanCategoryDto } from "./dto/create-human_category.dto";
import { UpdateHumanCategoryDto } from "./dto/update-human_category.dto";
import { Human_category } from "./models/human_category.model";
import { HumanCategoryModule } from "./human_category.module";
export declare class HumanCategoryService {
    private humanCategoryRepo;
    constructor(humanCategoryRepo: typeof Human_category);
    create(createHumanCategoryDto: CreateHumanCategoryDto): Promise<Human_category>;
    findAll(): Promise<Human_category[]>;
    findOne(id: number): Promise<Human_category>;
    updateHumanCategory(id: number, updateHumanCategoryDto: UpdateHumanCategoryDto): Promise<HumanCategoryModule>;
    remove(id: number): Promise<string>;
}
