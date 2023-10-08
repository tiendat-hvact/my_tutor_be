import {
  ArrayNotEmpty,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class MyScheduleDto {
  @IsNotEmpty()
  @IsString()
  _id: string;

  @IsOptional()
  @IsString()
  subject_id: string;

  @ArrayNotEmpty()
  @IsOptional()
  day: string[];

  @ArrayNotEmpty()
  @IsOptional()
  hour: string[];

  @IsOptional()
  @IsNumber()
  price: number;

  @IsOptional()
  @IsNumber()
  num_sessions: number;
}
