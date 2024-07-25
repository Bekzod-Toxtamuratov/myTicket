
import { Test } from "@nestjs/testing";
import { AdminController } from "../admin.controller";
import { AdminService } from "../admin.service";
import { JwtService } from "@nestjs/jwt";
import { CreateAdminDto } from "../dto/create-admin.dto";
import { Admin } from "../models/admin.models";
import { adminStub } from "./stubs/admin.stub";
import { UpdateAdminDto } from "../dto/update-admin.dto";

jest.mock("../admin.service");

describe("Admin Controller", () => {
  let adminController: AdminController;
  let adminService: AdminService;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [AdminController],
      providers: [AdminService, JwtService],
    }).compile();

    adminController = moduleRef.get<AdminController>(AdminController);
    adminService = moduleRef.get<AdminService>(AdminService);
  });

  it("should be defined", () => {
    expect(adminController).toBeDefined();
  });

  it("should be defined", () => {
    expect(adminService).toBeDefined();
  });

  // ******************************CREATED  CUSTOMERES*********************************

  describe("create Admins", () => {
    let createAdminDto: CreateAdminDto;
    let admin: Admin;
    beforeEach(async () => {
      createAdminDto = {
        name: adminStub().name,
        login: adminStub().login,
        password: adminStub().password,
        is_active: adminStub().is_active,
        is_creator: adminStub().is_creator,
        email: adminStub().email,
      };
      admin = await adminController.create(createAdminDto);
      console.log("admin created  ", admin);
    });
    it("should call AdminService.create with correct parameters", () => {
      expect(adminService.create).toHaveBeenCalledWith(createAdminDto);
    });
    it("should return the created admin", () => {
      expect(admin).toEqual(adminStub());
    });
  });

  //   // ******************************GETALL ADMINS*********************************

  describe("get ALL admins", () => {
    describe("when get ALL admins is called", () => {
      let admins: Admin[];
      beforeAll(async () => {
        admins = await adminController.findAll();

        console.log("admins getALL", admins);
      });
      test("when it should call AdminSirvice", () => {
        expect(adminService.findAll).toHaveBeenCalled();
      });
      test("then it should return admins", () => {
        expect(admins).toEqual([adminStub()]);
      });
    });
  });

  //   // // ***************************************************************BYID
  describe("getByID admin ", () => {
    describe(" when getById admin is called", () => {
      let admin: Admin;
      beforeAll(async () => {
        admin = await adminController.findOne(String(adminStub().id));
        console.log(" admin by Id ", admin);
      });
      test("when it should call adminServise", () => {
        expect(adminService.findOne).toHaveBeenCalledWith(adminStub().id);
      });
      test("then it should return admin", () => {
        expect(admin).toEqual(adminStub());
      });
    });
  });

  describe("deleteADmin", () => {
    describe("when create user is called", () => {
      let admin: Object;
      beforeAll(async () => {
        admin = await adminController.remove(String(adminStub().id));

        console.log("admin", admin);
      });
      test("then it should call admin", () => {
        expect(adminService.remove).toHaveBeenCalledWith(1);
      });

      test("then it should return admin", () => {
        expect(admin).toEqual(adminStub());
      });
    });
  });
  describe("Update ByID Admin ", () => {
    describe("when update ById ADmin is called", () => {
      let updateAdminDto: UpdateAdminDto;
      let admin: Admin;
      beforeAll(async () => {
        admin = await adminController.update(
          String(adminStub().id),
          updateAdminDto
        );
        console.log("new admin", admin);
      });
      test("when it should call CustomerServise", () => {
        expect(adminService.update).toHaveBeenCalledWith(
          adminStub().id,
          updateAdminDto
        );
      });
      test("then it should return new customer ", () => {
        expect(admin).toEqual(adminStub());
      });
    });
  });
});

//   // ***********************************UPDATE AdMIN ********************************

//   // describe("delete ByID", () => {
//   //   describe("when delete ById User is called",()=>{
//   //     let customer = ""
//   //     beforeAll(async () => {
//   //       customer = await customerController.remove(String(customerStub().id));
//   //     });
//   //     test("when it should call customerServise", () => {
//   //       expect(customerService.remove).toHaveBeenCalledWith(1);
//   //     });
//   //     test("then it should return new customer",()=> {
//   //       expect(customer).toEqual(customerStub());
//   //     });

//   //   });
//   // });
// });
