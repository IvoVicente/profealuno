import { PartialType } from '@nestjs/mapped-types';
import { CreateAmericoDto } from './create-americo.dto';

export class UpdateAmericoDto extends PartialType(CreateAmericoDto) {}
