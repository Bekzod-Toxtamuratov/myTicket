import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateEventTypeDto } from "./dto/create-event-type.dto";
import { UpdateEventTypeDto } from "./dto/update-event-type.dto";
import { InjectModel } from "@nestjs/sequelize";
import { EventType } from "./models/event-type.models";
import { EventTypeModule } from "./event-type.module";

@Injectable()
export class EventTypeService {
  constructor(
    @InjectModel(EventType) private readonly evenyTypeRepo: typeof EventType
  ) {}

  create(createEventTypeDto: CreateEventTypeDto) {
    return this.evenyTypeRepo.create(createEventTypeDto);
  }

  findAll() {
    return this.evenyTypeRepo.findAll();
  }

  async findOne(id: number) {
    const eventTypeData = await this.evenyTypeRepo.findByPk(id, {
      include: { all: true },
    });
    if (!eventTypeData) {
      throw new NotFoundException(`event-type  with ID ${id} not found`);
    }
    return eventTypeData;
  }

  async update(
    id: number,
    updateEventTypeDto: UpdateEventTypeDto
  ): Promise<EventTypeModule> {
    try {
      const [numberOfAffectedRows, [updateEventTypeCategory]] =
        await this.evenyTypeRepo.update(updateEventTypeDto, {
          where: { id },
          returning: true,
        });
      if (numberOfAffectedRows === 0) {
        throw new NotFoundException(`event-type with ID ${id} not found`);
      }
      return updateEventTypeCategory;
    } catch (error) {
      throw error;
    }
  }

  async remove(id: number): Promise<string> {
    try {
      const affectedRows = await this.evenyTypeRepo.destroy({
        where: { id },
      });
      if (affectedRows > 0) {
        return `event-type with ID ${id} was removed successfully.`;
      } else {
        return `event-type with ID ${id} not found.`;
      }
    } catch (error) {
      throw new Error(
        `Error removing event-type  with ID ${id}: ${error.message}`
      );
    }
  }
}
