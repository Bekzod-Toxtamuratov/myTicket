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
exports.EventService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const event_models_1 = require("./models/event.models");
const file_service_1 = require("../file/file.service");
let EventService = class EventService {
    constructor(eventRepo, fileService) {
        this.eventRepo = eventRepo;
        this.fileService = fileService;
    }
    async create(createEventDto, image) {
        const fileName = await this.fileService.saveFile(image);
        console.log("fileName  ", fileName);
        const event = await this.eventRepo.create({
            ...createEventDto,
            image: fileName,
        });
        return event;
    }
    findAll() {
        return this.eventRepo.findAll({ include: { all: true } });
    }
    async findOne(id) {
        const evetntData = await this.eventRepo.findByPk(id, {
            include: { all: true },
        });
        if (!evetntData) {
            throw new common_1.NotFoundException(`event type with ID ${id} not found`);
        }
        return evetntData;
    }
    async update(id, updateEventDto) {
        const [numberOfAffectedRows, [updatedEvent]] = await this.eventRepo.update(updateEventDto, {
            where: { id },
            returning: true,
        });
        if (numberOfAffectedRows === 0) {
            throw new common_1.NotFoundException(`event with ID ${id} not found`);
        }
        return updatedEvent;
    }
    async remove(id) {
        try {
            const affectedRows = await this.eventRepo.destroy({
                where: { id },
            });
            if (affectedRows > 0) {
                return `event with ID ${id} was removed successfully.`;
            }
            else {
                return `event with ID ${id} not found.`;
            }
        }
        catch (error) {
            throw new Error(`Error removing event with ID ${id}: ${error.message}`);
        }
    }
};
exports.EventService = EventService;
exports.EventService = EventService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(event_models_1.Event)),
    __metadata("design:paramtypes", [Object, file_service_1.FileService])
], EventService);
//# sourceMappingURL=event.service.js.map