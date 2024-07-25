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
exports.Ticket = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const swagger_1 = require("@nestjs/swagger");
const cart_models_1 = require("../../cart/models/cart.models");
const event_models_1 = require("../../event/models/event.models");
const seat_model_1 = require("../../seat/models/seat.model");
let Ticket = class Ticket extends sequelize_typescript_1.Model {
};
exports.Ticket = Ticket;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: "ticket unikal Id raqami " }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    }),
    __metadata("design:type", Number)
], Ticket.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "price example",
        description: "price  describtion ",
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
    }),
    __metadata("design:type", Number)
], Ticket.prototype, "price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "service_free example",
        description: "service_free  describtion ",
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
    }),
    __metadata("design:type", Number)
], Ticket.prototype, "service_free", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "ticket_type example",
        description: "ticket_type  describtion ",
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
    }),
    __metadata("design:type", Number)
], Ticket.prototype, "ticket_type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "event_id example",
        description: "event_id  describtion ",
    }),
    (0, sequelize_typescript_1.ForeignKey)(() => event_models_1.Event),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
    }),
    __metadata("design:type", Number)
], Ticket.prototype, "event_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "seat_id example",
        description: "seat_id  describtion ",
    }),
    (0, sequelize_typescript_1.ForeignKey)(() => seat_model_1.Seat),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
    }),
    __metadata("design:type", Number)
], Ticket.prototype, "seat_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "status_id example",
        description: "status_id  describtion ",
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
    }),
    __metadata("design:type", Number)
], Ticket.prototype, "status_id", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => event_models_1.Event),
    __metadata("design:type", event_models_1.Event)
], Ticket.prototype, "event", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => seat_model_1.Seat),
    __metadata("design:type", seat_model_1.Seat)
], Ticket.prototype, "seat", void 0);
__decorate([
    (0, sequelize_typescript_1.HasOne)(() => cart_models_1.Cart),
    __metadata("design:type", Array)
], Ticket.prototype, "cart", void 0);
exports.Ticket = Ticket = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: "ticket" })
], Ticket);
//# sourceMappingURL=ticket.models.js.map