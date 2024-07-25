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
exports.CustomerCardService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const customer_card_models_1 = require("./models/customer_card.models");
let CustomerCardService = class CustomerCardService {
    constructor(customer_cardRepo) {
        this.customer_cardRepo = customer_cardRepo;
    }
    create(createCustomerCardDto) {
        return this.customer_cardRepo.create(createCustomerCardDto);
    }
    findAll() {
        return this.customer_cardRepo.findAll();
    }
    async findOne(id) {
        const seat = await this.customer_cardRepo.findByPk(id, {
            include: { all: true },
        });
        if (!seat) {
            throw new common_1.NotFoundException(`customer_card with ID ${id} not found`);
        }
        return seat;
    }
    async updateCustomerCard(id, updateCustomerCardDto) {
        const [numberOfAffectedRows, [updatedCustomer_card]] = await this.customer_cardRepo.update(updateCustomerCardDto, {
            where: { id },
            returning: true,
        });
        if (numberOfAffectedRows === 0) {
            throw new common_1.NotFoundException(`customer_card with ID ${id} not found`);
        }
        return updatedCustomer_card;
    }
    async remove(id) {
        try {
            const affectedRows = await this.customer_cardRepo.destroy({
                where: { id },
            });
            if (affectedRows > 0) {
                return `customer_card with ID ${id} was removed successfully.`;
            }
            else {
                return `customer_card  with ID ${id} not found.`;
            }
        }
        catch (error) {
            throw new Error(`Error removing customer_card with ID ${id}: ${error.message}`);
        }
    }
};
exports.CustomerCardService = CustomerCardService;
exports.CustomerCardService = CustomerCardService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(customer_card_models_1.customer_Card)),
    __metadata("design:paramtypes", [Object])
], CustomerCardService);
//# sourceMappingURL=customer_card.service.js.map