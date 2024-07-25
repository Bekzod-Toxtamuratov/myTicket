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
exports.EventTypeService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const event_type_models_1 = require("./models/event-type.models");
let EventTypeService = class EventTypeService {
    constructor(evenyTypeRepo) {
        this.evenyTypeRepo = evenyTypeRepo;
    }
    create(createEventTypeDto) {
        return this.evenyTypeRepo.create(createEventTypeDto);
    }
    findAll() {
        return this.evenyTypeRepo.findAll();
    }
    async findOne(id) {
        const eventTypeData = await this.evenyTypeRepo.findByPk(id, {
            include: { all: true },
        });
        if (!eventTypeData) {
            throw new common_1.NotFoundException(`event-type  with ID ${id} not found`);
        }
        return eventTypeData;
    }
    async update(id, updateEventTypeDto) {
        try {
            const [numberOfAffectedRows, [updateEventTypeCategory]] = await this.evenyTypeRepo.update(updateEventTypeDto, {
                where: { id },
                returning: true,
            });
            if (numberOfAffectedRows === 0) {
                throw new common_1.NotFoundException(`event-type with ID ${id} not found`);
            }
            return updateEventTypeCategory;
        }
        catch (error) {
            throw error;
        }
    }
    async remove(id) {
        try {
            const affectedRows = await this.evenyTypeRepo.destroy({
                where: { id },
            });
            if (affectedRows > 0) {
                return `event-type with ID ${id} was removed successfully.`;
            }
            else {
                return `event-type with ID ${id} not found.`;
            }
        }
        catch (error) {
            throw new Error(`Error removing event-type  with ID ${id}: ${error.message}`);
        }
    }
};
exports.EventTypeService = EventTypeService;
exports.EventTypeService = EventTypeService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(event_type_models_1.EventType)),
    __metadata("design:paramtypes", [Object])
], EventTypeService);
//# sourceMappingURL=event-type.service.js.map