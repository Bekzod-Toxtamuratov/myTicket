import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsEmpty, IsNumber, IsSemVer, IsString } from "class-validator";

export class CreateVenuePhotoDto {
  @ApiProperty({
    example: "venue_id example",
    description: " venuid description",
  })
  // @IsNumber()
  // @IsEmpty()
  @Type(() => Number)
  venue_id: number;

  @ApiProperty({
    example: "url example",
    description: "url describtion",
  })
  @IsString()
  // @IsEmpty()
  url: string;
}
