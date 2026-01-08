import { PartialType } from '@nestjs/mapped-types';
import { CreateDocumentRelationDto } from './create-document_relation.dto';

export class UpdateDocumentRelationDto extends PartialType(CreateDocumentRelationDto) {}
