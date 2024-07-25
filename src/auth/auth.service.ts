import {
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import * as byscypt from "bcrypt";
import { JwtService } from "@nestjs/jwt";
import { LoginDto } from "./dto/login.dto";
import { CreateAdminDto } from "../admin/dto/create-admin.dto";
import { AdminService } from "../admin/admin.service";
import { Admin } from "../admin/models/admin.models";

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly adminService: AdminService
  ) {}

  async AdminsignUp(createAdminDto: CreateAdminDto) {
    const admin = await this.adminService.getADminByEmail(createAdminDto.email);

    if (admin) {
      throw new HttpException("Bunday admin mavjud", HttpStatus.BAD_REQUEST);
    }
    const hashedPassword = await byscypt.hash(createAdminDto.password, 7);
    createAdminDto.password = hashedPassword;
    const newAdmin = await this.adminService.create(createAdminDto);

    console.log("newAdmin", newAdmin);
    const data = await this.AdmingenerateToken(newAdmin);

    newAdmin.hashed_refresh_token = data.token;
    newAdmin.save();

    return data;
  }

  private async AdmingenerateToken(admin: Admin) {
    const payload = {
      sub: admin.id,
      email: admin.email,
      is_active: admin.is_active,
      is_creator: admin.is_creator,
    };
    return { token: this.jwtService.sign(payload) };
  }
  async AdminLogin(loginDto: LoginDto) {
    const admin = await this.adminService.getADminByEmail(loginDto.email);
    console.log("admin", admin);

    if (!admin) {
      console.log("! Oldin sipnup qilib keyin keling hozir ishlamiydi bomasa ");
      throw new UnauthorizedException("email yoki password notogri ");
    }
    const validPassword = await byscypt.compare(
      loginDto.password,
      admin.password
    );
    if (!validPassword) {
      console.log(loginDto.password, "   ", admin.password);
      console.log("!validPassword if ishladi ");

      throw new UnauthorizedException("email yoki password notogri ");
    }
    return this.AdmingenerateToken(admin);
  }
}
