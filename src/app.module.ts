import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { SequelizeModule } from "@nestjs/sequelize";
import { VenueTypeModule } from "./venue_type/venue_type.module";
import { Venue_type } from "./venue_type/models/venue_type.model";
import { VenuePhotoModule } from "./venue_photo/venue_photo.module";
import { Venue_photo } from "./venue_photo/models/venue_photo.model";
import { VenueModule } from "./venue/venue.module";
import { Venue } from "./venue/models/venue.model";
import { SeatTypeModule } from "./seat_type/seat_type.module";
import { SeatModule } from "./seat/seat.module";
import { Seat_type } from "./seat_type/models/seat_type.model";
import { Seat } from "./seat/models/seat.model";
import { HumanCategoryModule } from "./human_category/human_category.module";
import { Human_category } from "./human_category/models/human_category.model";
import { VenueVenueType } from "./venue/models/venueVenuetType.model";
import { EventModule } from "./event/event.module";
import { Event } from "./event/models/event.models";
import { EventTypeModule } from "./event-type/event-type.module";
import { EventType } from "./event-type/models/event-type.models";
import { TicketModule } from "./ticket/ticket.module";
import { Ticket } from "./ticket/models/ticket.models";
import { CustomerModule } from "./customer/customer.module";
import { Customer } from "./customer/models/customer.models";
import { CustomerCardModule } from "./customer_card/customer_card.module";
import { customer_Card } from "./customer_card/models/customer_card.models";
import { CustomerAddressModule } from "./customer_address/customer_address.module";
import { customer_address } from "./customer_address/models/customer_address.models";
import { Admin } from "./admin/models/admin.models";
import { AdminModule } from "./admin/admin.module";
import { AuthModule } from "./auth/auth.module";
import { BookingModule } from "./booking/booking.module";
import { Booking } from "./booking/models/booking.models";
import { CartModule } from "./cart/cart.module";
import { Cart } from "./cart/models/cart.models";
import { FileModule } from "./file/file.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { join } from "path";

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: ".env", isGlobal: true }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, "static"),
    }),
    SequelizeModule.forRoot({
      dialect: "postgres",
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: "root",
      database: process.env.POSTGRES_DB,
      models: [
        Venue_type,
        Venue_photo,
        Venue,
        Seat_type,
        Seat,
        Human_category,
        VenueVenueType,
        Event,
        EventType,
        Ticket,
        Customer,
        customer_Card,
        Admin,
        Booking,
        Cart,
        customer_address,
        // CustomerLanguage
      ],
      autoLoadModels: true,
      sync: { alter: true },
      logging: false,
    }),
    VenueTypeModule,
    VenuePhotoModule,
    VenueModule,
    SeatTypeModule,
    SeatModule,
    HumanCategoryModule,
    EventModule,
    EventTypeModule,
    TicketModule,
    CustomerModule,
    CustomerCardModule,
    CustomerAddressModule,
    AdminModule,
    AuthModule,
    BookingModule,
    CartModule,
    FileModule,
  ],
})
export class AppModule {}
