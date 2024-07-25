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
exports.CreateCustomerCardDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateCustomerCardDto {
}
exports.CreateCustomerCardDto = CreateCustomerCardDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: "123456789", description: "Card number" }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateCustomerCardDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "phone_number",
        description: "phone_number descibtion",
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateCustomerCardDto.prototype, "phone_number", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "number",
        description: "number descibtion",
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateCustomerCardDto.prototype, "number", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "customer_id example",
        description: "customer_id descibtion",
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Object)
], CreateCustomerCardDto.prototype, "customer_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "year example",
        description: "year descibtion",
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateCustomerCardDto.prototype, "year", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "month example",
        description: "month descibtion",
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateCustomerCardDto.prototype, "month", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "is_active example",
        description: "is_active descibtion",
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateCustomerCardDto.prototype, "is_active", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "is_main example",
        description: "is_main descibtion",
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateCustomerCardDto.prototype, "is_main", void 0);
//# sourceMappingURL=create-customer_card.dto.js.map