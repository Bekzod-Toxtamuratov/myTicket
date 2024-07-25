import { Admin } from "../../models/admin.models"

export const adminStub=():Partial<Admin>=>{
      return {
      id:1,
      name: "AdminBekzod",
      login: "BekzodToxtamuratov",
      password: "AB4356982",
      is_active: true,
      is_creator: false,
      hashed_refresh_token: "string"


  }  
}