"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerAddressModule = void 0;
const common_1 = require("@nestjs/common");
const customer_address_service_1 = require("./customer_address.service");
const customer_address_controller_1 = require("./customer_address.controller");
const sequelize_1 = require("@nestjs/sequelize");
const customer_address_models_1 = require("./models/customer_address.models");
let CustomerAddressModule = class CustomerAddressModule {
};
exports.CustomerAddressModule = CustomerAddressModule;
exports.CustomerAddressModule = CustomerAddressModule = __decorate([
    (0, common_1.Module)({
        imports: [sequelize_1.SequelizeModule.forFeature([customer_address_models_1.customer_address])],
        controllers: [customer_address_controller_1.CustomerAddressController],
        providers: [customer_address_service_1.CustomerAddressService],
    })
], CustomerAddressModule);
//# sourceMappingURL=customer_address.module.js.map