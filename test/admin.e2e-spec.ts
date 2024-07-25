import { INestApplication, ValidationPipe } from "@nestjs/common";
import { Test, TestingModule } from "@nestjs/testing";
import { AppModule } from "../src/app.module";
import * as request from "supertest";
import { join } from "path";
import { SequelizeModule } from "@nestjs/sequelize";

describe("Admin (e2e)", () => {
  let app: INestApplication;
  let token: string;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(new ValidationPipe());
    await app.init();

    const response = await request(app.getHttpServer())
      .post("/auth/login")
      .send({
        email: "BekzodToxtamuratov03@gmail.com",
        password: "string",
      });
    token = response.body.token;
  });

  it("/admin (GET) --> 200 OK", () => {
    return request(app.getHttpServer())
      .get("/admin")
      .set("Authorization", `Bearer ${token}`)
      .expect("Content-Type", /json/)
      .expect(200);
  });

  // it("/admin (GET) 401 --> 'Unauthorized' error", () => {
  //   return request(app.getHttpServer())
  //     .get("/admin")
  //     .expect("Content-Type", /json/)
  //     .expect(401);
  // });

  it("/auth/register (POST) --> 201", async () => {
    return request(app.getHttpServer())
      .post("/auth/register")
      .send({
        name: "Bekjon",
        login: "JamshidI1skandartov",
        email: "JamshidIsk12andarov@gmail.com",
        password: "Mypassword",
        is_active: true,
        is_creator: false,
      })
      .expect("Content-Type", /json/)
      .expect(201)
      .then((response) => {
        expect(response.body).toMatchObject({
          token: expect.any(String),
        });
      });
  });
  // ************************************** old admin ****************************
  // it("/auth/register (POST) --> 400 Validation error", () => {
  //   return request(app.getHttpServer())
  //     .post("/auth/register")
  //     .send({
  //       name: "Bekjon",
  //       login: "BekzodToxtamuratov",
  //       email: "BekzodTo12qxtamur12atov03@gmail.com",
  //       password: "string",
  //       is_active: true,
  //       is_creator: false,
  //     })
  //     .expect("Content-Type", /json/)
  //     .expect(400)
  //     .expect({
  //       message: ["Bunday foydalanuvhchi mavjud"],
  //       error: "Bad Request",
  //       StatusCode: 400,
  //     });
  // });

  // ************************************** parol ****************************

  // it("/auth/register (POST) --> 400 Validation error", () => {
  //   return request(app.getHttpServer())
  //     .post("/auth/register")
  //     .send({
  //       name: "Bekjon",
  //       login: "BekzodToxtamuratov",
  //       email: "BekzodToqxtamur12atov03@gmail.com",
  //       password: "123",
  //       is_active: true,
  //       is_creator: false,
  //     })
  //     .expect("Content-Type", /json/)
  //     .expect(400)
  //     .expect({
  //       message: ["Parol  parol salabiy"],
  //       error: "Bad Request",
  //       StatusCode: 400,
  //     });
  // });
  // ************************************** EMAIL ****************************
  // it("/auth/register (POST) --> 400 Validation error", () => {
  //   return request(app.getHttpServer())
  //     .post("/auth/register")
  //     .send({
  //       name: "Bekjon",
  //       login: "BekzodToxtamuratov",
  //       email: "Bekzodgmail.com",
  //       password: "123",
  //       is_active: true,
  //       is_creator: false,
  //     })
  //     .expect("Content-Type", /json/)
  //     .expect(400)
  //     .expect({
  //       message: ["email is invali password is invalid"],
  //       error: "Bad Request",
  //       StatusCode: 400,
  //     });
  // });

  // it("/ (Delete) --> OK", () => {
  //   return request(app.getHttpServer()).delete("/admin/27").expect(200);
  // });

  it("new admin --> Patch", async () => {
    const adminId = 7; // Assuming you're updating admin with ID 1
    const response = await request(app.getHttpServer())
      .patch(`/admin/${adminId}`)
      .send({
        name: "Bekjon1",
        login: "Bekzod_Toxtamuratov1",
        email: "BekzodToxtamuratov03@gmail.com",
        password: "string",
        is_active: false,
        is_creator: false,
        hashed_refresh_token: "string",
      })
      .expect("Content-Type", /json/)
      .expect(200);
  });

  //  dasturlashni
  // it("update admin --> PUT", async () => {
  //   const response = await request(app.getHttpServer())
  //     .patch("/admin/7")
  //     // .set("Authorization", `Bearer ${token}`)
  //     .send({
  //       name: "Bekzod",
  //       login: "Bekzod_Toxtamuratov1",
  //       email: "BekzodToxtamuratov03@gmail.com",
  //       password: "string",
  //       is_active: false,
  //       is_creator: false,
  //       hashed_refresh_token: "string",
  //     })
  //     .expect("Content-Type", /json/)
  //     .expect(200);
  // });

  describe("DELETE /admin/:id", () => {
    it("responds with 200 OK", async () => {
      const response = await request(app.getHttpServer()).delete("/admin/600");

      expect(response.status).toBe(200);
    });
  });

  afterAll(async () => {
    await app.close();
  });
});
