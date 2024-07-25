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
exports.CreateSeatDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateSeatDto {
}
exports.CreateSeatDto = CreateSeatDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: "orindiq-1", description: "orindiq  joyi" }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreateSeatDto.prototype, "sector", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "qator raqami bu yerda ",
        description: "17",
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateSeatDto.prototype, "row_number", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "30",
        description: "number bu yerda",
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateSeatDto.prototype, "number", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "venuid bolishi kerak naryo betda",
        description: "venuid boyicha bu",
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreateSeatDto.prototype, "venueId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "1",
        description: "seat_type boyicha naryo",
    }),
    __metadata("design:type", Number)
], CreateSeatDto.prototype, "seat_type_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "Toshkent Drujba",
        description: "location boyicha",
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateSeatDto.prototype, "location_in_schema", void 0);
//# sourceMappingURL=create-seat.dto.js.map