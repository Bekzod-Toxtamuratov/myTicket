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
exports.Cart = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const swagger_1 = require("@nestjs/swagger");
const customer_models_1 = require("../../customer/models/customer.models");
const ticket_models_1 = require("../../ticket/models/ticket.models");
let Cart = class Cart extends sequelize_typescript_1.Model {
};
exports.Cart = Cart;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 1,
        description: "cart unikal Id raqami ",
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    }),
    __metadata("design:type", Number)
], Cart.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "ticket_id  example",
        description: "ticket_id  describtion",
    }),
    (0, sequelize_typescript_1.ForeignKey)(() => ticket_models_1.Ticket),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
    }),
    __metadata("design:type", Number)
], Cart.prototype, "ticket_id", void 0);
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
], Cart.prototype, "customer_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "status_id example",
        description: "status_id describtion",
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
    }),
    __metadata("design:type", Number)
], Cart.prototype, "status_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "createdAt example",
        description: "createdAt describtion",
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.DATE,
    }),
    __metadata("design:type", Date)
], Cart.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "finishedAt example",
        description: "finishedAt describtion",
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.DATE,
    }),
    __metadata("design:type", Date)
], Cart.prototype, "finishedAt", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => customer_models_1.Customer),
    __metadata("design:type", customer_models_1.Customer)
], Cart.prototype, "customer", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => ticket_models_1.Ticket),
    __metadata("design:type", ticket_models_1.Ticket)
], Cart.prototype, "ticket", void 0);
exports.Cart = Cart = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: "cart" }),
    (0, swagger_1.ApiTags)("customer_address")
], Cart);
//# sourceMappingURL=cart.models.js.map