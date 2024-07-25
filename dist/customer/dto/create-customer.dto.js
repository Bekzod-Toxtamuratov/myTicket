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
exports.CreateCustomerDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class CreateCustomerDto {
}
exports.CreateCustomerDto = CreateCustomerDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "first_name is ",
        description: "first_name describtion",
    }),
    __metadata("design:type", String)
], CreateCustomerDto.prototype, "first_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "last_name is ",
        description: "last_name describtion",
    }),
    __metadata("design:type", String)
], CreateCustomerDto.prototype, "last_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "last_name is ",
        description: "last_name describtion",
    }),
    __metadata("design:type", String)
], CreateCustomerDto.prototype, "phone_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "hashed_password is ",
        description: "hashed_password describtion",
    }),
    __metadata("design:type", String)
], CreateCustomerDto.prototype, "hashed_password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "email is ",
        description: "email describtion",
    }),
    __metadata("design:type", String)
], CreateCustomerDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "birth_date is ",
        description: "birth_date describtion",
    }),
    __metadata("design:type", String)
], CreateCustomerDto.prototype, "birth_date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "gender is ",
        description: "gender describtion",
    }),
    __metadata("design:type", String)
], CreateCustomerDto.prototype, "gender", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "customer_lang_id is ",
        description: "customer_lang_id describtion",
    }),
    __metadata("design:type", Number)
], CreateCustomerDto.prototype, "customer_lang_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "hashed_refresh_token is ",
        description: "hashed_refresh_token describtion",
    }),
    __metadata("design:type", String)
], CreateCustomerDto.prototype, "hashed_refresh_token", void 0);
//# sourceMappingURL=create-customer.dto.js.map