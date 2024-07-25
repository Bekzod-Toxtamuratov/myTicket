import { PartialType } from "@nestjs/swagger";
import { CreateCustomerCardDto } from "./create-customer_card.dto";

export class UpdateCustomerCardDto extends PartialType(CreateCustomerCardDto) {
  first_name: string;
  last_name: string;
  phone_name: string;
  hashed_password: string;
  email: string;
  birth_date: string;
  gender: string;
  customer_lang_id: number;
  hashed_refresh_token: string;
}
