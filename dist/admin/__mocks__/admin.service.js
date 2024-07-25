"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminService = void 0;
const admin_stub_1 = require("../test/stubs/admin.stub");
exports.AdminService = jest.fn().mockReturnValue({
    create: jest.fn().mockReturnValue((0, admin_stub_1.adminStub)()),
    findAll: jest.fn().mockReturnValue([(0, admin_stub_1.adminStub)()]),
    findOne: jest.fn().mockReturnValue((0, admin_stub_1.adminStub)()),
    update: jest.fn().mockReturnValue((0, admin_stub_1.adminStub)()),
    remove: jest.fn().mockReturnValue((0, admin_stub_1.adminStub)()),
});
//# sourceMappingURL=admin.service.js.map