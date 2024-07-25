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
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateTicketDto {
}
exports.default = CreateTicketDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: "price is ", description: "price describtion" }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateTicketDto.prototype, "price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "1 ",
        description: "service_free describtion",
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateTicketDto.prototype, "service_free", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "1 ",
        description: "ticket_type describtion",
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateTicketDto.prototype, "ticket_type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "1 ",
        description: "event_id describtion",
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateTicketDto.prototype, "event_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "1 ",
        description: "seat_id describtion",
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateTicketDto.prototype, "seat_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "1 ",
        description: "status_id describtion",
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateTicketDto.prototype, "status_id", void 0);
//# sourceMappingURL=create-ticket.dto.js.map