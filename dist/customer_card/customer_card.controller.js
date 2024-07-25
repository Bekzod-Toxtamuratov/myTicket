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
exports.CustomerCardController = void 0;
const common_1 = require("@nestjs/common");
const customer_card_service_1 = require("./customer_card.service");
const create_customer_card_dto_1 = require("./dto/create-customer_card.dto");
const update_customer_card_dto_1 = require("./dto/update-customer_card.dto");
const swagger_1 = require("@nestjs/swagger");
const customer_card_models_1 = require("./models/customer_card.models");
let CustomerCardController = class CustomerCardController {
    constructor(customerCardService) {
        this.customerCardService = customerCardService;
    }
    create(createCustomerCardDto) {
        return this.customerCardService.create(createCustomerCardDto);
    }
    findAll() {
        return this.customerCardService.findAll();
    }
    findOne(id) {
        return this.customerCardService.findOne(+id);
    }
    update(id, updateCustomerCardDto) {
        return this.customerCardService.updateCustomerCard(+id, updateCustomerCardDto);
    }
    remove(id) {
        return this.customerCardService.remove(+id);
    }
};
exports.CustomerCardController = CustomerCardController;
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "created customer card" }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: "The created customer card",
        type: [customer_card_models_1.customer_Card],
    }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_customer_card_dto_1.CreateCustomerCardDto]),
    __metadata("design:returntype", void 0)
], CustomerCardController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "customer  getALL card" }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "customer  getALL card ",
        type: [customer_card_models_1.customer_Card],
    }),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CustomerCardController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "customer  get byID card" }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "customer  get ByID  card ",
        type: customer_card_models_1.customer_Card,
    }),
    (0, common_1.Get)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CustomerCardController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "customer  edit  card" }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "customer  edit  card ",
        type: customer_card_models_1.customer_Card,
    }),
    (0, common_1.Patch)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_customer_card_dto_1.UpdateCustomerCardDto]),
    __metadata("design:returntype", void 0)
], CustomerCardController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "customer  delete  customer_card" }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "customer  delete   customer_card",
        type: customer_card_models_1.customer_Card,
    }),
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CustomerCardController.prototype, "remove", null);
exports.CustomerCardController = CustomerCardController = __decorate([
    (0, common_1.Controller)("customer-card"),
    (0, swagger_1.ApiTags)("customer-card"),
    __metadata("design:paramtypes", [customer_card_service_1.CustomerCardService])
], CustomerCardController);
//# sourceMappingURL=customer_card.controller.js.map