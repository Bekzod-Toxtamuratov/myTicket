import { CreateAdminDto } from "./dto/create-admin.dto";
import { UpdateAdminDto } from "./dto/update-admin.dto";
import { Admin } from "./models/admin.models";
export declare class AdminService {
    private readonly AdminRepo;
    constructor(AdminRepo: typeof Admin);
    create(createAdminDto: CreateAdminDto): Promise<Admin>;
    findAll(): Promise<Admin[]>;
    getADminByEmail(email: string): Promise<Admin>;
    findOne(id: number): Promise<Admin>;
    update(id: number, updateAdminDto: UpdateAdminDto): Promise<Admin>;
    remove(id: number): Promise<string>;
}
