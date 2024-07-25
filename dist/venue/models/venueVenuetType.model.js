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
exports.VenueVenueType = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const venue_model_1 = require("./venue.model");
const venue_type_model_1 = require("../../venue_type/models/venue_type.model");
let VenueVenueType = class VenueVenueType extends sequelize_typescript_1.Model {
};
exports.VenueVenueType = VenueVenueType;
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => venue_model_1.Venue),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
    }),
    __metadata("design:type", Number)
], VenueVenueType.prototype, "venueId", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => venue_type_model_1.Venue_type),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
    }),
    __metadata("design:type", Number)
], VenueVenueType.prototype, "venue_TypeId", void 0);
exports.VenueVenueType = VenueVenueType = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: "venueVenueType" })
], VenueVenueType);
//# sourceMappingURL=venueVenuetType.model.js.map