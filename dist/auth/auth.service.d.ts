import { JwtService } from "@nestjs/jwt";
import { LoginDto } from "./dto/login.dto";
import { CreateAdminDto } from "../admin/dto/create-admin.dto";
import { AdminService } from "../admin/admin.service";
export declare class AuthService {
    private readonly jwtService;
    private readonly adminService;
    constructor(jwtService: JwtService, adminService: AdminService);
    AdminsignUp(createAdminDto: CreateAdminDto): Promise<{
        token: string;
    }>;
    private AdmingenerateToken;
    AdminLogin(loginDto: LoginDto): Promise<{
        token: string;
    }>;
}
