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
exports.SeatService = void 0;
const common_1 = require("@nestjs/common");
const seat_model_1 = require("./models/seat.model");
const sequelize_1 = require("@nestjs/sequelize");
let SeatService = class SeatService {
    constructor(seatRepo) {
        this.seatRepo = seatRepo;
    }
    async create(createSeatDto) {
        return this.seatRepo.create(createSeatDto);
    }
    async findAll() {
        return this.seatRepo.findAll({ include: { all: true } });
    }
    async findOne(id) {
        const seat = await this.seatRepo.findByPk(id, { include: { all: true } });
        if (!seat) {
            throw new common_1.NotFoundException(`Seat with ID ${id} not found`);
        }
        return seat;
    }
    async updateSeat(id, updateSeatDto) {
        const [numberOfAffectedRows, [updatedSeat]] = await this.seatRepo.update(updateSeatDto, {
            where: { id },
            returning: true,
        });
        if (numberOfAffectedRows === 0) {
            throw new common_1.NotFoundException(`Seat with ID ${id} not found`);
        }
        return updatedSeat;
    }
    async remove(id) {
        try {
            const affectedRows = await this.seatRepo.destroy({ where: { id } });
            if (affectedRows > 0) {
                return `Seat with ID ${id} was removed successfully.`;
            }
            else {
                return `Seat with ID ${id} not found.`;
            }
        }
        catch (error) {
            throw new Error(`Error removing seat with ID ${id}: ${error.message}`);
        }
    }
};
exports.SeatService = SeatService;
exports.SeatService = SeatService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(seat_model_1.Seat)),
    __metadata("design:paramtypes", [Object])
], SeatService);
//# sourceMappingURL=seat.service.js.map