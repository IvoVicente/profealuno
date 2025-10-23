import { PartialType } from '@nestjs/mapped-types';
import { CreateRosbonDto } from './create-rosbon.dto';

export class UpdateRosbonDto extends PartialType(CreateRosbonDto) {}
