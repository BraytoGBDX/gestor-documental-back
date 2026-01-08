import { PartialType } from '@nestjs/mapped-types';
import { CreateDocumentAssignmentDto } from './create-document_assignment.dto';

export class UpdateDocumentAssignmentDto extends PartialType(CreateDocumentAssignmentDto) {}
