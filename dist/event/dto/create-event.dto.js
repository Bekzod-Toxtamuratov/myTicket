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
exports.CreateEventDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class CreateEventDto {
}
exports.CreateEventDto = CreateEventDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: "example", description: "event name" }),
    __metadata("design:type", String)
], CreateEventDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "example photo", description: "event photo" }),
    __metadata("design:type", String)
], CreateEventDto.prototype, "photo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "example start_date",
        description: "start_date description",
    }),
    __metadata("design:type", String)
], CreateEventDto.prototype, "start_date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "example start_time",
        description: "start_time description",
    }),
    __metadata("design:type", Date)
], CreateEventDto.prototype, "start_time", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "example finish_date",
        description: "finish_date description",
    }),
    __metadata("design:type", String)
], CreateEventDto.prototype, "finish_date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "example finish_time",
        description: "finish_time description",
    }),
    __metadata("design:type", String)
], CreateEventDto.prototype, "finish_time", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "example info",
        description: "info description",
    }),
    __metadata("design:type", String)
], CreateEventDto.prototype, "info", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "language_id info",
        description: "language_id description",
    }),
    __metadata("design:type", Number)
], CreateEventDto.prototype, "event_language_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "even_type_id info",
        description: "even_type_id description",
    }),
    __metadata("design:type", Number)
], CreateEventDto.prototype, "even_type_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "human_category_id info",
        description: "human_category_id description",
    }),
    __metadata("design:type", Number)
], CreateEventDto.prototype, "human_category_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "venue_id info",
        description: "venue_id description",
    }),
    __metadata("design:type", Number)
], CreateEventDto.prototype, "venue_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "realese_data info",
        description: "realese_data description",
    }),
    __metadata("design:type", String)
], CreateEventDto.prototype, "realese_data", void 0);
//# sourceMappingURL=create-event.dto.js.map