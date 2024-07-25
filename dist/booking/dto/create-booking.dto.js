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
exports.CreateBookingDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateBookingDto {
}
exports.CreateBookingDto = CreateBookingDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "cart_id example ",
        description: "cart_id describtion",
    }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateBookingDto.prototype, "cart_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "createAt example ",
        description: "createAt describtion",
    }),
    __metadata("design:type", Date)
], CreateBookingDto.prototype, "createAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "finished example ",
        description: "finished describtion",
    }),
    __metadata("design:type", Date)
], CreateBookingDto.prototype, "finished", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "payment_method_id example ",
        description: "payment_method_id describtion",
    }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateBookingDto.prototype, "payment_method_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "delevery_method_id example ",
        description: "delevery_method_id describtion",
    }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateBookingDto.prototype, "delevery_method_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "discount_coupon_id example ",
        description: "discount_coupon_id describtion",
    }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateBookingDto.prototype, "discount_coupon_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: " example  status_id",
        description: "status_id describtion",
    }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateBookingDto.prototype, "status_id", void 0);
//# sourceMappingURL=create-booking.dto.js.map