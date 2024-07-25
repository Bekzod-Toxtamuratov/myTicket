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
exports.VenueService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const venue_model_1 = require("./models/venue.model");
let VenueService = class VenueService {
    constructor(venueRepo) {
        this.venueRepo = venueRepo;
    }
    async create(createVenueDto) {
        try {
            const newVenue = await this.venueRepo.create(createVenueDto);
            await newVenue.$set("venue_type", [createVenueDto.venue_typeId]);
            await newVenue.save();
            return newVenue;
        }
        catch (error) {
            throw error;
        }
    }
    async getAllVenue() {
        return this.venueRepo.findAll({ include: { all: true } });
    }
    async findOne(id) {
        const seat = await this.venueRepo.findByPk(id, {
            include: { all: true },
        });
        if (!seat) {
            throw new common_1.NotFoundException(`venue_type with ID ${id} not found`);
        }
        return seat;
    }
    async update(id, updateVenueDto) {
        console.log("ok");
        const [numberOfAffectedRows, [updatedSeat]] = await this.venueRepo.update(updateVenueDto, {
            where: { id },
            returning: true,
        });
        if (numberOfAffectedRows === 0) {
            throw new common_1.NotFoundException(`vebue with ID ${id} not found`);
        }
        return updatedSeat;
    }
    async remove(id) {
        try {
            const affectedRows = await this.venueRepo.destroy({
                where: { id },
            });
            if (affectedRows > 0) {
                return `venue with ID ${id} was removed successfully.`;
            }
            else {
                return `venue with ID ${id} not found.`;
            }
        }
        catch (error) {
            throw new Error(`Error removing venue with ID ${id}: ${error.message}`);
        }
    }
};
exports.VenueService = VenueService;
exports.VenueService = VenueService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(venue_model_1.Venue)),
    __metadata("design:paramtypes", [Object])
], VenueService);
//# sourceMappingURL=venue.service.js.map