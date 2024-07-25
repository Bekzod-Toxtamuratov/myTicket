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
exports.CustomerAddressService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const customer_address_models_1 = require("./models/customer_address.models");
let CustomerAddressService = class CustomerAddressService {
    constructor(customer_addressRepo) {
        this.customer_addressRepo = customer_addressRepo;
    }
    create(createCustomerAddressDto) {
        return this.customer_addressRepo.create(createCustomerAddressDto);
    }
    findAll() {
        return this.customer_addressRepo.findAll();
    }
    async findOne(id) {
        const customers_address = await this.customer_addressRepo.findByPk(id, {
            include: { all: true },
        });
        if (!customers_address) {
            throw new common_1.NotFoundException(`customer_address with ID ${id} not found`);
        }
        return customers_address;
    }
    async updateCustomer_address(id, updateCustomerAddressDto) {
        const [numberOfAffectedRows, [updatedCustomersAddress]] = await this.customer_addressRepo.update(updateCustomerAddressDto, {
            where: { id },
            returning: true,
        });
        if (numberOfAffectedRows === 0) {
            throw new common_1.NotFoundException(`customer_address with ID ${id} not found`);
        }
        return updatedCustomersAddress;
    }
    async remove(id) {
        try {
            const affectedRows = await this.customer_addressRepo.destroy({
                where: { id },
            });
            if (affectedRows > 0) {
                return `customer_address with ID ${id} was removed successfully.`;
            }
            else {
                return `customer_address with ID ${id} not found.`;
            }
        }
        catch (error) {
            throw new Error(`Error removing customer_address with ID ${id}: ${error.message}`);
        }
    }
};
exports.CustomerAddressService = CustomerAddressService;
exports.CustomerAddressService = CustomerAddressService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(customer_address_models_1.customer_address)),
    __metadata("design:paramtypes", [Object])
], CustomerAddressService);
//# sourceMappingURL=customer_address.service.js.map