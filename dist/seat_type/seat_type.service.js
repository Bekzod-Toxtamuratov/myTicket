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
exports.SeatTypeService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const seat_type_model_1 = require("./models/seat_type.model");
let SeatTypeService = class SeatTypeService {
    constructor(seat_typeRepo) {
        this.seat_typeRepo = seat_typeRepo;
    }
    async create(createSeatTypeDto) {
        return this.seat_typeRepo.create(createSeatTypeDto);
    }
    async findAll() {
        return this.seat_typeRepo.findAll({ include: { all: true } });
    }
    async findOne(id) {
        const seat = await this.seat_typeRepo.findByPk(id, {
            include: { all: true },
        });
        if (!seat) {
            throw new common_1.NotFoundException(`Seat-type with ID ${id} not found`);
        }
        return seat;
    }
    async updateSeatType(id, updateseatType) {
        const [numberOfAffectedRows, [updatedSeat]] = await this.seat_typeRepo.update(updateseatType, {
            where: { id },
            returning: true,
        });
        if (numberOfAffectedRows === 0) {
            throw new common_1.NotFoundException(`Seat-type with ID ${id} not found`);
        }
        return updatedSeat;
    }
    async remove(id) {
        try {
            const affectedRows = await this.seat_typeRepo.destroy({
                where: { id },
            });
            if (affectedRows > 0) {
                return `Seat-type with ID ${id} was removed successfully.`;
            }
            else {
                return `Seat-type with ID ${id} not found.`;
            }
        }
        catch (error) {
            throw new Error(`Error removing seat-type with ID ${id}: ${error.message}`);
        }
    }
};
exports.SeatTypeService = SeatTypeService;
exports.SeatTypeService = SeatTypeService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(seat_type_model_1.Seat_type)),
    __metadata("design:paramtypes", [Object])
], SeatTypeService);
//# sourceMappingURL=seat_type.service.js.map