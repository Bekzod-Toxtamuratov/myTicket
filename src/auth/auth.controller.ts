import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
} from "@nestjs/common";
import { AuthService } from "./auth.service";
import { LoginDto } from "./dto/login.dto";
import { ApiTags } from "@nestjs/swagger";
import { CreateAdminDto } from "../admin/dto/create-admin.dto";

@ApiTags("Authorization")
@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("register")
  signUp(@Body() createAdminDto: CreateAdminDto) {
    return this.authService.AdminsignUp(createAdminDto);
  }

  @HttpCode(HttpStatus.OK)
  @Post("login")
  async Adminsigon(@Body() loginDto: LoginDto) {
    return this.authService.AdminLogin(loginDto);
  }
}
