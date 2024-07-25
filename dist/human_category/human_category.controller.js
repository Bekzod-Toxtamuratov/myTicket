"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HumanCategoryController = void 0;
const common_1 = require("@nestjs/common");
const human_category_service_1 = require("./human_category.service");
const create_human_category_dto_1 = require("./dto/create-human_category.dto");
const update_human_category_dto_1 = require("./dto/update-human_category.dto");
const swagger_1 = require("@nestjs/swagger");
const human_category_model_1 = require("./models/human_category.model");
let HumanCategoryController = class HumanCategoryController {
    constructor(humanCategoryService) {
        this.humanCategoryService = humanCategoryService;
    }
    create(createHumanCategoryDto) {
        return this.humanCategoryService.create(createHumanCategoryDto);
    }
    findAll() {
        return this.humanCategoryService.findAll();
    }
    findOne(id) {
        return this.humanCategoryService.findOne(+id);
    }
    Human_categoryEdit(id, updateHumanCategoryDto) {
        return this.humanCategoryService.updateHumanCategory(+id, updateHumanCategoryDto);
    }
    ixtiyoriyNom(id) {
        return this.humanCategoryService.remove(+id);
    }
};
exports.HumanCategoryController = HumanCategoryController;
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "human_category ni yaratish hisoblandi" }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "List of Human_category",
        type: [human_category_model_1.Human_category],
    }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_human_category_dto_1.CreateHumanCategoryDto]),
    __metadata("design:returntype", void 0)
], HumanCategoryController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "human_category ni  hammasini korish" }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "List of Human_category",
        type: [human_category_model_1.Human_category],
    }),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], HumanCategoryController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: "human_category ni byId boyicha ko'rish hisoblandi",
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "List of Human_category",
        type: human_category_model_1.Human_category,
    }),
    (0, common_1.Get)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], HumanCategoryController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "human_category ni Edit qilish" }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "List of Human_category",
        type: human_category_model_1.Human_category,
    }),
    (0, common_1.Patch)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_human_category_dto_1.UpdateHumanCategoryDto]),
    __metadata("design:returntype", void 0)
], HumanCategoryController.prototype, "Human_categoryEdit", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "human_category ni  delete  qilish hisoblandi" }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "List of Human_category",
        type: human_category_model_1.Human_category,
    }),
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], HumanCategoryController.prototype, "ixtiyoriyNom", null);
exports.HumanCategoryController = HumanCategoryController = __decorate([
    (0, swagger_1.ApiTags)("human_category"),
    (0, common_1.Controller)("human-category"),
    __metadata("design:paramtypes", [human_category_service_1.HumanCategoryService])
], HumanCategoryController);
//# sourceMappingURL=human_category.controller.js.map