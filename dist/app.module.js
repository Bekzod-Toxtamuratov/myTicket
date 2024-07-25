"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const sequelize_1 = require("@nestjs/sequelize");
const venue_type_module_1 = require("./venue_type/venue_type.module");
const venue_type_model_1 = require("./venue_type/models/venue_type.model");
const venue_photo_module_1 = require("./venue_photo/venue_photo.module");
const venue_photo_model_1 = require("./venue_photo/models/venue_photo.model");
const venue_module_1 = require("./venue/venue.module");
const venue_model_1 = require("./venue/models/venue.model");
const seat_type_module_1 = require("./seat_type/seat_type.module");
const seat_module_1 = require("./seat/seat.module");
const seat_type_model_1 = require("./seat_type/models/seat_type.model");
const seat_model_1 = require("./seat/models/seat.model");
const human_category_module_1 = require("./human_category/human_category.module");
const human_category_model_1 = require("./human_category/models/human_category.model");
const venueVenuetType_model_1 = require("./venue/models/venueVenuetType.model");
const event_module_1 = require("./event/event.module");
const event_models_1 = require("./event/models/event.models");
const event_type_module_1 = require("./event-type/event-type.module");
const event_type_models_1 = require("./event-type/models/event-type.models");
const ticket_module_1 = require("./ticket/ticket.module");
const ticket_models_1 = require("./ticket/models/ticket.models");
const customer_module_1 = require("./customer/customer.module");
const customer_models_1 = require("./customer/models/customer.models");
const customer_card_module_1 = require("./customer_card/customer_card.module");
const customer_card_models_1 = require("./customer_card/models/customer_card.models");
const customer_address_module_1 = require("./customer_address/customer_address.module");
const customer_address_models_1 = require("./customer_address/models/customer_address.models");
const admin_models_1 = require("./admin/models/admin.models");
const admin_module_1 = require("./admin/admin.module");
const auth_module_1 = require("./auth/auth.module");
const booking_module_1 = require("./booking/booking.module");
const booking_models_1 = require("./booking/models/booking.models");
const cart_module_1 = require("./cart/cart.module");
const cart_models_1 = require("./cart/models/cart.models");
const file_module_1 = require("./file/file.module");
const serve_static_1 = require("@nestjs/serve-static");
const path_1 = require("path");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({ envFilePath: ".env", isGlobal: true }),
            serve_static_1.ServeStaticModule.forRoot({
                rootPath: (0, path_1.join)(__dirname, "static"),
            }),
            sequelize_1.SequelizeModule.forRoot({
                dialect: "postgres",
                host: process.env.POSTGRES_HOST,
                port: Number(process.env.POSTGRES_PORT),
                username: process.env.POSTGRES_USER,
                password: "root",
                database: process.env.POSTGRES_DB,
                models: [
                    venue_type_model_1.Venue_type,
                    venue_photo_model_1.Venue_photo,
                    venue_model_1.Venue,
                    seat_type_model_1.Seat_type,
                    seat_model_1.Seat,
                    human_category_model_1.Human_category,
                    venueVenuetType_model_1.VenueVenueType,
                    event_models_1.Event,
                    event_type_models_1.EventType,
                    ticket_models_1.Ticket,
                    customer_models_1.Customer,
                    customer_card_models_1.customer_Card,
                    admin_models_1.Admin,
                    booking_models_1.Booking,
                    cart_models_1.Cart,
                    customer_address_models_1.customer_address,
                ],
                autoLoadModels: true,
                sync: { alter: true },
                logging: false,
            }),
            venue_type_module_1.VenueTypeModule,
            venue_photo_module_1.VenuePhotoModule,
            venue_module_1.VenueModule,
            seat_type_module_1.SeatTypeModule,
            seat_module_1.SeatModule,
            human_category_module_1.HumanCategoryModule,
            event_module_1.EventModule,
            event_type_module_1.EventTypeModule,
            ticket_module_1.TicketModule,
            customer_module_1.CustomerModule,
            customer_card_module_1.CustomerCardModule,
            customer_address_module_1.CustomerAddressModule,
            admin_module_1.AdminModule,
            auth_module_1.AuthModule,
            booking_module_1.BookingModule,
            cart_module_1.CartModule,
            file_module_1.FileModule,
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map