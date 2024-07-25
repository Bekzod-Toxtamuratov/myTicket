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
exports.VenueTypeService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const venue_type_model_1 = require("./models/venue_type.model");
let VenueTypeService = class VenueTypeService {
    constructor(venue_typeRepo) {
        this.venue_typeRepo = venue_typeRepo;
    }
    async create(createVenueTypeDto) {
        return this.venue_typeRepo.create(createVenueTypeDto);
    }
    async getAllVenueType() {
        return this.venue_typeRepo.findAll({ include: { all: true } });
    }
    async findOne(id) {
        const venue_type = await this.venue_typeRepo.findByPk(id, {
            include: { all: true },
        });
        if (!venue_type) {
            throw new common_1.NotFoundException(`Venue_type with ID ${id} not found`);
        }
        return venue_type;
    }
    async update(id, updateVenueTypeDto) {
        const [numberOfAffectedRows, [updatedSeat]] = await this.venue_typeRepo.update(updateVenueTypeDto, {
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
            const affectedRows = await this.venue_typeRepo.destroy({
                where: { id },
            });
            if (affectedRows > 0) {
                return `venue-type with ID ${id} was removed successfully.`;
            }
            else {
                return `venue-type with ID ${id} not found.`;
            }
        }
        catch (error) {
            throw new Error(`Error removing venue-type  with ID ${id}: ${error.message}`);
        }
    }
};
exports.VenueTypeService = VenueTypeService;
exports.VenueTypeService = VenueTypeService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(venue_type_model_1.Venue_type)),
    __metadata("design:paramtypes", [Object])
], VenueTypeService);
//# sourceMappingURL=venue_type.service.js.map