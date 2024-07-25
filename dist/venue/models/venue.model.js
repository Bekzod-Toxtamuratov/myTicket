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
exports.Venue = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const venueVenuetType_model_1 = require("./venueVenuetType.model");
const venue_type_model_1 = require("../../venue_type/models/venue_type.model");
const seat_model_1 = require("../../seat/models/seat.model");
const swagger_1 = require("@nestjs/swagger");
let Venue = class Venue extends sequelize_typescript_1.Model {
};
exports.Venue = Venue;
__decorate([
    (0, swagger_1.ApiProperty)({ example: "venue", description: "Venue details" }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    }),
    __metadata("design:type", Number)
], Venue.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "name example", description: "venue describtion" }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
    }),
    __metadata("design:type", String)
], Venue.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "address example",
        description: "address describtion",
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
    }),
    __metadata("design:type", String)
], Venue.prototype, "address", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "location example",
        description: "location describtion",
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
    }),
    __metadata("design:type", String)
], Venue.prototype, "location", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "site example",
        description: "site describtion",
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
    }),
    __metadata("design:type", String)
], Venue.prototype, "site", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "phone example",
        description: "phone describtion",
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
    }),
    __metadata("design:type", String)
], Venue.prototype, "phone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "schema example",
        description: "schema describtion",
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
    }),
    __metadata("design:type", String)
], Venue.prototype, "schema", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "region id example",
        description: "region_id describtion",
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false,
    }),
    __metadata("design:type", Number)
], Venue.prototype, "region_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "disctirict id example",
        description: "districts_id describtion",
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false,
    }),
    __metadata("design:type", Number)
], Venue.prototype, "district_id", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => seat_model_1.Seat),
    __metadata("design:type", seat_model_1.Seat)
], Venue.prototype, "seat", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsToMany)(() => venue_type_model_1.Venue_type, () => venueVenuetType_model_1.VenueVenueType),
    __metadata("design:type", Array)
], Venue.prototype, "venue_type", void 0);
exports.Venue = Venue = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: "venue" })
], Venue);
//# sourceMappingURL=venue.model.js.map