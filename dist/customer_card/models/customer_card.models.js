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
exports.customer_Card = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const swagger_1 = require("@nestjs/swagger");
const customer_models_1 = require("../../customer/models/customer.models");
let customer_Card = class customer_Card extends sequelize_typescript_1.Model {
};
exports.customer_Card = customer_Card;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: "customer_card unikal Id raqami " }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    }),
    __metadata("design:type", Number)
], customer_Card.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "customer_car  name example",
        description: "customer_card name describtion",
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
    }),
    __metadata("design:type", String)
], customer_Card.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "customer_id  name example",
        description: "customer_id name describtion",
    }),
    (0, sequelize_typescript_1.ForeignKey)(() => customer_models_1.Customer),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
    }),
    __metadata("design:type", Number)
], customer_Card.prototype, "customer_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "phone_number example",
        description: "phone_number describtion",
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
    }),
    __metadata("design:type", String)
], customer_Card.prototype, "phone_number", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "number example",
        description: "number describtion",
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
    }),
    __metadata("design:type", Number)
], customer_Card.prototype, "number", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "year example",
        description: "year describtion",
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
    }),
    __metadata("design:type", String)
], customer_Card.prototype, "year", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "month example",
        description: "month describtion",
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
    }),
    __metadata("design:type", String)
], customer_Card.prototype, "month", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "is_active example",
        description: "is_active describtion",
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.BOOLEAN,
    }),
    __metadata("design:type", Boolean)
], customer_Card.prototype, "is_active", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "is_main example",
        description: "is_main describtion",
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.BOOLEAN,
    }),
    __metadata("design:type", Boolean)
], customer_Card.prototype, "is_main", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => customer_models_1.Customer),
    __metadata("design:type", customer_models_1.Customer)
], customer_Card.prototype, "customer", void 0);
exports.customer_Card = customer_Card = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: "customer_card" })
], customer_Card);
//# sourceMappingURL=customer_card.models.js.map