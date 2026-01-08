import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DocumentAssignmentsService } from './document_assignments.service';
import { CreateDocumentAssignmentDto } from './dto/create-document_assignment.dto';
import { UpdateDocumentAssignmentDto } from './dto/update-document_assignment.dto';

@Controller('document-assignments')
export class DocumentAssignmentsController {
  constructor(private readonly documentAssignmentsService: DocumentAssignmentsService) {}

  @Post()
  create(@Body() createDocumentAssignmentDto: CreateDocumentAssignmentDto) {
    return this.documentAssignmentsService.create(createDocumentAssignmentDto);
  }

  @Get()
  findAll() {
    return this.documentAssignmentsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.documentAssignmentsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDocumentAssignmentDto: UpdateDocumentAssignmentDto) {
    return this.documentAssignmentsService.update(+id, updateDocumentAssignmentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.documentAssignmentsService.remove(+id);
  }
}
