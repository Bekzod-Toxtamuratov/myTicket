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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VenuePhotoController = void 0;
const common_1 = require("@nestjs/common");
const venue_photo_service_1 = require("./venue_photo.service");
const create_venue_photo_dto_1 = require("./dto/create-venue_photo.dto");
const update_venue_photo_dto_1 = require("./dto/update-venue_photo.dto");
const platform_express_1 = require("@nestjs/platform-express");
const swagger_1 = require("@nestjs/swagger");
const venue_photo_model_1 = require("./models/venue_photo.model");
let VenuePhotoController = class VenuePhotoController {
    constructor(venuePhotoService) {
        this.venuePhotoService = venuePhotoService;
    }
    create(createVenuePhotoDto, image) {
        return this.venuePhotoService.create(createVenuePhotoDto, image);
    }
    getAllVenueType() {
        return this.venuePhotoService.getAllVenuePhoto();
    }
    findOne(id) {
        return this.venuePhotoService.findOne(+id);
    }
    update(id, updateVenuePhotoDto) {
        return this.venuePhotoService.update(+id, updateVenuePhotoDto);
    }
    remove(id) {
        return this.venuePhotoService.remove(+id);
    }
};
exports.VenuePhotoController = VenuePhotoController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('image')),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_venue_photo_dto_1.CreateVenuePhotoDto, Object]),
    __metadata("design:returntype", void 0)
], VenuePhotoController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Bu yerda getAll qilinadi" }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "The venue photo",
        type: [venue_photo_model_1.Venue_photo],
    }),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], VenuePhotoController.prototype, "getAllVenueType", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Bu yerda getOne qilinadi" }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "The venue photo",
        type: venue_photo_model_1.Venue_photo,
    }),
    (0, common_1.Get)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], VenuePhotoController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Bu yerda editById qilinadi" }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "The venue photo",
        type: venue_photo_model_1.Venue_photo,
    }),
    (0, common_1.Patch)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_venue_photo_dto_1.UpdateVenuePhotoDto]),
    __metadata("design:returntype", void 0)
], VenuePhotoController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Bu yerda delteById qilinadi" }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "The venue photo",
        type: venue_photo_model_1.Venue_photo,
    }),
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], VenuePhotoController.prototype, "remove", null);
exports.VenuePhotoController = VenuePhotoController = __decorate([
    (0, common_1.Controller)("venue-photo"),
    (0, swagger_1.ApiTags)("venue-photo"),
    __metadata("design:paramtypes", [venue_photo_service_1.VenuePhotoService])
], VenuePhotoController);
//# sourceMappingURL=venue_photo.controller.js.map