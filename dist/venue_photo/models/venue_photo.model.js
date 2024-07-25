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
exports.Venue_photo = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const swagger_1 = require("@nestjs/swagger");
let Venue_photo = class Venue_photo extends sequelize_typescript_1.Model {
};
exports.Venue_photo = Venue_photo;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: " exampl id",
        description: "venue_photo description",
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    }),
    __metadata("design:type", Number)
], Venue_photo.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: " example venue_id",
        description: "venue_id description",
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
    }),
    __metadata("design:type", Number)
], Venue_photo.prototype, "venue_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: " example url",
        description: "url description",
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
    }),
    __metadata("design:type", String)
], Venue_photo.prototype, "url", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: " image url",
        description: "image description",
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
    }),
    __metadata("design:type", String)
], Venue_photo.prototype, "image", void 0);
exports.Venue_photo = Venue_photo = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: "venue_photo" })
], Venue_photo);
//# sourceMappingURL=venue_photo.model.js.map