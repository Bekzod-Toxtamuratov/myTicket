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
exports.EventType = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const swagger_1 = require("@nestjs/swagger");
let EventType = class EventType extends sequelize_typescript_1.Model {
};
exports.EventType = EventType;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: "event_type unikal Id raqami " }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    }),
    __metadata("design:type", Number)
], EventType.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "event_type about ichida",
        description: "event_type describtion",
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
    }),
    __metadata("design:type", String)
], EventType.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "parent_event_type_id about ichida",
        description: "parent_event_type_id  describtion ",
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
    }),
    __metadata("design:type", Object)
], EventType.prototype, "parent_event_type_id", void 0);
exports.EventType = EventType = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: "event_type", createdAt: false, updatedAt: false })
], EventType);
//# sourceMappingURL=event-type.models.js.map