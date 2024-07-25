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
exports.Seat_type = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const seat_model_1 = require("../../seat/models/seat.model");
const swagger_1 = require("@nestjs/swagger");
let Seat_type = class Seat_type extends sequelize_typescript_1.Model {
};
exports.Seat_type = Seat_type;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: "seat-type unikal Id raqami " }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    }),
    __metadata("design:type", Number)
], Seat_type.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "name example",
        description: "name  describtion ",
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING(100),
    }),
    __metadata("design:type", String)
], Seat_type.prototype, "name", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => seat_model_1.Seat),
    __metadata("design:type", seat_model_1.Seat)
], Seat_type.prototype, "seat", void 0);
exports.Seat_type = Seat_type = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: "seat_type" })
], Seat_type);
//# sourceMappingURL=seat_type.model.js.map