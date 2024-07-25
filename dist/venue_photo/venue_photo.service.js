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
exports.VenuePhotoService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const venue_photo_model_1 = require("./models/venue_photo.model");
const file_service_1 = require("../file/file.service");
let VenuePhotoService = class VenuePhotoService {
    constructor(venue_photoRepo, fileService) {
        this.venue_photoRepo = venue_photoRepo;
        this.fileService = fileService;
    }
    async create(createVenuePhotoDto, image) {
        const fileName = await this.fileService.saveFile(image);
        console.log("fileName  ", fileName);
        const venue_photo = await this.venue_photoRepo.create({
            ...createVenuePhotoDto,
            image: fileName,
        });
        return venue_photo;
    }
    async getAllVenuePhoto() {
        return this.venue_photoRepo.findAll({ include: { all: true } });
    }
    async findOne(id) {
        const venueData = await this.venue_photoRepo.findByPk(id, {
            include: { all: true },
        });
        if (!venueData) {
            throw new common_1.NotFoundException(`venue_photo type with ID ${id} not found`);
        }
        return venueData;
    }
    async update(id, updateVenuePhotoDto) {
        const [numberOfAffectedRows, [updatedSeat]] = await this.venue_photoRepo.update(updateVenuePhotoDto, {
            where: { id },
            returning: true,
        });
        if (numberOfAffectedRows === 0) {
            throw new common_1.NotFoundException(`venue-type with ID ${id} not found`);
        }
        return updatedSeat;
    }
    async remove(id) {
        try {
            const affectedRows = await this.venue_photoRepo.destroy({
                where: { id },
            });
            if (affectedRows > 0) {
                return `venue-photo with ID ${id} was removed successfully.`;
            }
            else {
                return `venue-photo with ID ${id} not found.`;
            }
        }
        catch (error) {
            throw new Error(`Error removing venue-photos with ID ${id}: ${error.message}`);
        }
    }
};
exports.VenuePhotoService = VenuePhotoService;
exports.VenuePhotoService = VenuePhotoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(venue_photo_model_1.Venue_photo)),
    __metadata("design:paramtypes", [Object, file_service_1.FileService])
], VenuePhotoService);
//# sourceMappingURL=venue_photo.service.js.map