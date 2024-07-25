import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateEventDto } from "./dto/create-event.dto";
import { UpdateEventDto } from "./dto/update-event.dto";
import { InjectModel } from "@nestjs/sequelize";
import { Event } from "./models/event.models";
import { FileService } from "../file/file.service";

@Injectable()
export class EventService {
 

  constructor(
    @InjectModel(Event) private eventRepo: typeof Event,
    private readonly fileService: FileService
  ) {}
  async create(createEventDto: CreateEventDto, image: any) {
    const fileName = await this.fileService.saveFile(image);
    console.log("fileName  ", fileName);
    const event = await this.eventRepo.create({
      ...createEventDto,
        image: fileName,
    });
    return event;
  }

  findAll() {
    return this.eventRepo.findAll({ include: { all: true } });
  }

  async findOne(id: number) {
    const evetntData = await this.eventRepo.findByPk(id, {
      include: { all: true },
    });

    if (!evetntData) {
      throw new NotFoundException(`event type with ID ${id} not found`);
    }
    return evetntData;
  }

  async update(id: number, updateEventDto: UpdateEventDto): Promise<Event> {
    const [numberOfAffectedRows, [updatedEvent]] = await this.eventRepo.update(
      updateEventDto,
      {
        where: { id },
        returning: true,
      }
    );
    if (numberOfAffectedRows === 0) {
      throw new NotFoundException(`event with ID ${id} not found`);
    }
    return updatedEvent;
  }

  async remove(id: number) {
    try {
      const affectedRows = await this.eventRepo.destroy({
        where: { id },
      });
      if (affectedRows > 0) {
        return `event with ID ${id} was removed successfully.`;
      } else {
        return `event with ID ${id} not found.`;
      }
    } catch (error) {
      throw new Error(`Error removing event with ID ${id}: ${error.message}`);
    }
  }
}