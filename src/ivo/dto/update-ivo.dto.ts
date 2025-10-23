import { PartialType } from '@nestjs/mapped-types';
import { CreateIvoDto } from './create-ivo.dto';

export class UpdateIvoDto extends PartialType(CreateIvoDto) {}
