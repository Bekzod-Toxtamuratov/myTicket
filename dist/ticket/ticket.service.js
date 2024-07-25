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
exports.TicketService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const ticket_models_1 = require("./models/ticket.models");
let TicketService = class TicketService {
    constructor(ticketRepo) {
        this.ticketRepo = ticketRepo;
    }
    create(createTicketDto) {
        return this.ticketRepo.create(createTicketDto);
    }
    findAll() {
        return this.ticketRepo.findAll({ include: { all: true } });
    }
    async findOne(id) {
        const ticket = await this.ticketRepo.findByPk(id, {
            include: { all: true },
        });
        if (!ticket) {
            throw new common_1.NotFoundException(`ticket with ID ${id} not found`);
        }
        return ticket;
    }
    async updateTicket(id, updateTicketDto) {
        const [numberOfAffectedRows, [updatedTicket]] = await this.ticketRepo.update(updateTicketDto, {
            where: { id },
            returning: true,
        });
        if (numberOfAffectedRows === 0) {
            throw new common_1.NotFoundException(`ticket with ID ${id} not found`);
        }
        return updatedTicket;
    }
    async remove(id) {
        try {
            const affectedRows = await this.ticketRepo.destroy({ where: { id } });
            if (affectedRows > 0) {
                return `ticket with ID ${id} was removed successfully.`;
            }
            else {
                return `ticket with ID ${id} not found.`;
            }
        }
        catch (error) {
            throw new Error(`Error removing ticket with ID ${id}: ${error.message}`);
        }
    }
};
exports.TicketService = TicketService;
exports.TicketService = TicketService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(ticket_models_1.Ticket)),
    __metadata("design:paramtypes", [Object])
], TicketService);
//# sourceMappingURL=ticket.service.js.map