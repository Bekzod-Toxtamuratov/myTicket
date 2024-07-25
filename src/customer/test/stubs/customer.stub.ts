import { Customer } from "../../models/customer.models"

export const customerStub=():Partial<Customer>=>{
      return {
      id:1,
      first_name: "string",
      last_name: "string",
      phone_name: "string",
      hashed_password: "String",
      email: "string",
      birth_date: "string",
      gender: "String",
      customer_lang_id: 1,
      hashed_refresh_token: "string",

  }  
}