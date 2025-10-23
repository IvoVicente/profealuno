import { PartialType } from '@nestjs/mapped-types';
import { CreateSuzyDto } from './create-suzy.dto';

export class UpdateSuzyDto extends PartialType(CreateSuzyDto) {}
