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
exports.customer_address = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const swagger_1 = require("@nestjs/swagger");
const customer_models_1 = require("../../customer/models/customer.models");
let customer_address = class customer_address extends sequelize_typescript_1.Model {
};
exports.customer_address = customer_address;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 1,
        description: "customer_address unikal Id raqami ",
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    }),
    __metadata("design:type", Number)
], customer_address.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "name example",
        description: "name  describtion",
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
    }),
    __metadata("design:type", String)
], customer_address.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "country_id example",
        description: "country_id describtion",
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
    }),
    __metadata("design:type", Number)
], customer_address.prototype, "country_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "customer_id example",
        description: "customer_id describtion",
    }),
    (0, sequelize_typescript_1.ForeignKey)(() => customer_models_1.Customer),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
    }),
    __metadata("design:type", Number)
], customer_address.prototype, "customer_id", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => customer_models_1.Customer),
    __metadata("design:type", customer_models_1.Customer)
], customer_address.prototype, "customer", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "region_id example",
        description: "region_id describtion",
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
    }),
    __metadata("design:type", Number)
], customer_address.prototype, "region_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "disctric_id example",
        description: "disctric_id describtion",
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
    }),
    __metadata("design:type", Number)
], customer_address.prototype, "disctric_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "house example",
        description: "house describtion",
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
    }),
    __metadata("design:type", String)
], customer_address.prototype, "house", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "street example",
        description: "street describtion",
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
    }),
    __metadata("design:type", String)
], customer_address.prototype, "street", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "flat example",
        description: "flat describtion",
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
    }),
    __metadata("design:type", String)
], customer_address.prototype, "flat", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "location example",
        description: "location describtion",
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
    }),
    __metadata("design:type", String)
], customer_address.prototype, "location", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "post_index example",
        description: "post_index describtion",
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
    }),
    __metadata("design:type", String)
], customer_address.prototype, "post_index", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "info example",
        description: "info describtion",
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
    }),
    __metadata("design:type", String)
], customer_address.prototype, "info", void 0);
exports.customer_address = customer_address = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: "customer_address" }),
    (0, swagger_1.ApiTags)("customer_address")
], customer_address);
//# sourceMappingURL=customer_address.models.js.map