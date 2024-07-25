import { Test } from "@nestjs/testing";
import { CustomerController } from "../customer.controller";
import { CustomerService } from "../customer.service";
import { Customer } from "../models/customer.models";
import { CreateCustomerDto } from "../dto/create-customer.dto";
import { customerStub } from "./stubs/customer.stub";
import { UpdateCustomerDto } from "../dto/update-customer.dto";

jest.mock("../customer.service");

describe("Customer Controller", () => {
  let customerController: CustomerController;
  let customerService: CustomerService;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [CustomerController],
      providers: [CustomerService],
    }).compile();

    customerController = moduleRef.get<CustomerController>(CustomerController);
    customerService = moduleRef.get<CustomerService>(CustomerService);
  });

  it("should be defined", () => {
    expect(customerController).toBeDefined();
  });

  it("should be defined", () => {
    expect(customerService).toBeDefined();
  });

  // ******************************CREATED  CUSTOMERES*********************************

  describe("create Customer", () => {
    let createCustomerDto: CreateCustomerDto;
    let customer: Customer;
    beforeEach(async () => {
      createCustomerDto = {
        first_name: customerStub().first_name,
        last_name: customerStub().last_name,
        phone_name: customerStub().phone_name,
        hashed_password: customerStub().hashed_password,
        email: customerStub().email,
        birth_date: customerStub().birth_date,
        gender: customerStub().gender,
        customer_lang_id: customerStub().customer_lang_id,
        hashed_refresh_token: customerStub().hashed_refresh_token,
      };
      customer = await customerController.create(createCustomerDto);
      console.log("customer ", customer);
    });

    it("should call customerService.create with correct parameters", () => {
      expect(customerService.create).toHaveBeenCalledWith(createCustomerDto);
    });

    it("should return the created customer", () => {
      expect(customer).toEqual(customerStub());
    });
  });

  // ******************************GETALL CUSTOMERES*********************************

  describe("get ALL customers", () => {
    describe("when get ALL Customers is called", () => {
      let customers: Customer[];
      beforeAll(async () => {
        customers = await customerController.findAll();

        console.log("customers getALL", customers);
      });
      test("when it should call userServise", () => {
        expect(customerService.findAll).toHaveBeenCalled();
      });
      test("then it should return customers", () => {
        expect(customers).toEqual([customerStub()]);
      });
    });
  });

  // ***************************************************************BYID
  describe("getByID customer ", () => {
    describe(" when getById customer is called", () => {
      let customer: Customer;
      beforeAll(async () => {
        customer = await customerController.findOne(String(customerStub().id));

        console.log(" customer by Id ", customer);
      });
      test("when it should call customServise", () => {
        expect(customerService.findOne).toHaveBeenCalledWith(customerStub().id);
      });
      test("then it should return customer", () => {
        expect(customer).toEqual(customerStub());
      });
    });
  });
  // ***********************************UPDATE CUSTOMERS ********************************

  describe("Update ByID Customer ", () => {
    describe(" when update ById Customer is called", () => {
      let updateCustomerDto: UpdateCustomerDto;

      // console.log("updateCustomerDto",updateCustomerDto);
      let customer: Customer;
      beforeAll(async () => {
        customer = await customerController.update(
          String(customerStub().id),
          updateCustomerDto
        );
      });
      test("when it should call CustomerServise", () => {
        expect(customerService.updateCustomer).toHaveBeenCalledWith(
          customerStub().id,
          updateCustomerDto
        );
      });
      test("then it should return new customer ", () => {
        expect(customer).toEqual(customerStub());
      });
    });
  });

  describe("delete ByID", () => {
    describe("when delete ById User is called", () => {
      let customer = "";
      beforeAll(async () => {
        customer = await customerController.remove(String(customerStub().id));
      });
      test("when it should call customerServise", () => {
        expect(customerService.remove).toHaveBeenCalledWith(1);
      });
      test("then it should return new customer", () => {
        expect(customer).toEqual(customerStub());
      });
    });
  });
});
