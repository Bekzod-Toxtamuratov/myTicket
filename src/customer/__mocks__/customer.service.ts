import { customerStub } from "../test/stubs/customer.stub";

export const CustomerService = jest.fn().mockReturnValue({
  create: jest.fn().mockReturnValue(customerStub()),
  findAll: jest.fn().mockReturnValue([customerStub()]),
  findOne: jest.fn().mockReturnValue(customerStub()),
  updateCustomer: jest.fn().mockReturnValue(customerStub()),
  remove: jest.fn().mockReturnValue(customerStub()),
});
