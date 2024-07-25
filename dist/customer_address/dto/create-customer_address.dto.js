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
exports.CreateCustomerAddressDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateCustomerAddressDto {
}
exports.CreateCustomerAddressDto = CreateCustomerAddressDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "customer_id",
        description: "customer_id describtion",
    }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreateCustomerAddressDto.prototype, "customer_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "address_address name",
        description: "Customers_address describtion",
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateCustomerAddressDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "country_id",
        description: "country_id describtion",
    }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreateCustomerAddressDto.prototype, "country_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "region_id",
        description: "region_id describtion",
    }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreateCustomerAddressDto.prototype, "region_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "disctric_id",
        description: "disctric_id describtion",
    }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreateCustomerAddressDto.prototype, "disctric_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "street name",
        description: "street describtion",
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateCustomerAddressDto.prototype, "street", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "house name",
        description: "house describtion",
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateCustomerAddressDto.prototype, "house", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "flat name",
        description: "flat describtion",
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateCustomerAddressDto.prototype, "flat", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "location example",
        description: "location describtion",
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateCustomerAddressDto.prototype, "location", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "post_index example",
        description: "post_index describtion",
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateCustomerAddressDto.prototype, "post_index", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "info example",
        description: "info describtion",
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateCustomerAddressDto.prototype, "info", void 0);
//# sourceMappingURL=create-customer_address.dto.js.map