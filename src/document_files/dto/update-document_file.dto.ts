import { PartialType } from '@nestjs/mapped-types';
import { CreateDocumentFileDto } from './create-document_file.dto';

export class UpdateDocumentFileDto extends PartialType(CreateDocumentFileDto) {}
