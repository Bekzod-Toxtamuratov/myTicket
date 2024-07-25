import { CreateHumanCategoryDto } from "./create-human_category.dto";
declare const UpdateHumanCategoryDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateHumanCategoryDto>>;
export declare class UpdateHumanCategoryDto extends UpdateHumanCategoryDto_base {
    name: string;
    start_age: number;
    finish_age: number;
    gender: string;
}
export {};
