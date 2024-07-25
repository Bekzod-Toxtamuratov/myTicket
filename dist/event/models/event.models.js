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
exports.Event = void 0;
const swagger_1 = require("@nestjs/swagger");
const sequelize_typescript_1 = require("sequelize-typescript");
let Event = class Event extends sequelize_typescript_1.Model {
};
exports.Event = Event;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: "even unikal Id raqami " }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    }),
    __metadata("design:type", Number)
], Event.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "user name  example",
        description: "foydalunuvchi ismi  modelsni ichida",
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING(100),
    }),
    __metadata("design:type", String)
], Event.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "uimage  example",
        description: "foydalunuvchi ismi  modelsni ichida",
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
    }),
    __metadata("design:type", String)
], Event.prototype, "image", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "photo  example",
        description: "photo description",
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
    }),
    __metadata("design:type", String)
], Event.prototype, "photo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "start_date example ",
        description: "start_date modelsni ichida description",
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
    }),
    __metadata("design:type", String)
], Event.prototype, "start_date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "start_time example ",
        description: "start_time modelsni ichida description",
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.DATE,
    }),
    __metadata("design:type", Date)
], Event.prototype, "start_time", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "finish_date example ",
        description: "finish_date modelsni ichida description",
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
    }),
    __metadata("design:type", String)
], Event.prototype, "finish_date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "finish time example ",
        description: "finish_time modelsni ichida description",
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
    }),
    __metadata("design:type", String)
], Event.prototype, "finish_time", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "ozi haqida example ",
        description: "describtion info",
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
    }),
    __metadata("design:type", String)
], Event.prototype, "info", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "realese_data example ",
        description: "realese_data  description",
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
    }),
    __metadata("design:type", String)
], Event.prototype, "realese_data", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "event_language_id example ",
        description: "event_language_id  description",
    }),
    (0, swagger_1.ApiProperty)({
        example: "even_type_id example ",
        description: "even_type_id  description",
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
    }),
    __metadata("design:type", Number)
], Event.prototype, "even_type_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "venue_id example ",
        description: "venue_id  description",
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
    }),
    __metadata("design:type", Number)
], Event.prototype, "venue_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "human_category_id example ",
        description: "human_category_id  description",
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
    }),
    __metadata("design:type", Number)
], Event.prototype, "human_category_id", void 0);
exports.Event = Event = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: "event" })
], Event);
//# sourceMappingURL=event.models.js.map