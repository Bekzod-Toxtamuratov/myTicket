"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerService = void 0;
const customer_stub_1 = require("../test/stubs/customer.stub");
exports.CustomerService = jest.fn().mockReturnValue({
    create: jest.fn().mockReturnValue((0, customer_stub_1.customerStub)()),
    findAll: jest.fn().mockReturnValue([(0, customer_stub_1.customerStub)()]),
    findOne: jest.fn().mockReturnValue((0, customer_stub_1.customerStub)()),
    updateCustomer: jest.fn().mockReturnValue((0, customer_stub_1.customerStub)()),
    remove: jest.fn().mockReturnValue((0, customer_stub_1.customerStub)()),
});
//# sourceMappingURL=customer.service.js.map