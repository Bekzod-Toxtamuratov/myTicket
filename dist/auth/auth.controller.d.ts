import { AuthService } from "./auth.service";
import { LoginDto } from "./dto/login.dto";
import { CreateAdminDto } from "../admin/dto/create-admin.dto";
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    signUp(createAdminDto: CreateAdminDto): Promise<{
        token: string;
    }>;
    Adminsigon(loginDto: LoginDto): Promise<{
        token: string;
    }>;
}
