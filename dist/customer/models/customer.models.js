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
exports.Customer = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const swagger_1 = require("@nestjs/swagger");
let Customer = class Customer extends sequelize_typescript_1.Model {
};
exports.Customer = Customer;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: "customer unikal Id raqami " }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    }),
    __metadata("design:type", Number)
], Customer.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "customer first_name example",
        description: "customer first_name describtion",
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
    }),
    __metadata("design:type", String)
], Customer.prototype, "first_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "last_name example",
        description: "last_name describtion",
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
    }),
    __metadata("design:type", String)
], Customer.prototype, "last_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "phone_name example",
        description: "phone_name describtion",
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
    }),
    __metadata("design:type", String)
], Customer.prototype, "phone_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "hashed_password example",
        description: "hashed_password describtion",
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
    }),
    __metadata("design:type", String)
], Customer.prototype, "hashed_password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "email example",
        description: "email describtion",
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
    }),
    __metadata("design:type", String)
], Customer.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "birth_date example",
        description: "birth_date describtion",
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
    }),
    __metadata("design:type", String)
], Customer.prototype, "birth_date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "gender example",
        description: "gender describtion",
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
    }),
    __metadata("design:type", String)
], Customer.prototype, "gender", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "customer_lang_id example",
        description: "customer_lang_id describtion",
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
    }),
    __metadata("design:type", Number)
], Customer.prototype, "customer_lang_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "hashed_refresh_token example",
        description: "hashed_refresh_token describtion",
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
    }),
    __metadata("design:type", String)
], Customer.prototype, "hashed_refresh_token", void 0);
exports.Customer = Customer = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: "customer" })
], Customer);
//# sourceMappingURL=customer.models.js.map