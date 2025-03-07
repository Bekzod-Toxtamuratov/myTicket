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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Human_category = void 0;
const swagger_1 = require("@nestjs/swagger");
const sequelize_typescript_1 = require("sequelize-typescript");
let Human_category = class Human_category extends sequelize_typescript_1.Model {
};
exports.Human_category = Human_category;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: "foydalunuvchi unikal Id raqami " }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    }),
    __metadata("design:type", Number)
], Human_category.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "user1 modelsni ichida",
        description: "foydalunuvchi ismi  modelsni ichida",
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING(100),
    }),
    __metadata("design:type", String)
], Human_category.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "18yosh  modelsni ichida",
        description: "foydalunuvchi yoshi  modelsni ichida",
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
    }),
    __metadata("design:type", Number)
], Human_category.prototype, "start_age", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "40yosh  modelsni ichida ",
        description: "foydalunuvchi yoshi  modelsni ichida",
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
    }),
    __metadata("design:type", Number)
], Human_category.prototype, "finish_age", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "rost yoki yolgon ",
        description: "foydalunuvchi jinsi",
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
    }),
    __metadata("design:type", String)
], Human_category.prototype, "gender", void 0);
exports.Human_category = Human_category = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: "human_category" })
], Human_category);
//# sourceMappingURL=human_category.model.js.map