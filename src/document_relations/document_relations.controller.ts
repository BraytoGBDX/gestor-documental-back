import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DocumentRelationsService } from './document_relations.service';
import { CreateDocumentRelationDto } from './dto/create-document_relation.dto';
import { UpdateDocumentRelationDto } from './dto/update-document_relation.dto';

@Controller('document-relations')
export class DocumentRelationsController {
  constructor(private readonly documentRelationsService: DocumentRelationsService) {}

  @Post()
  create(@Body() createDocumentRelationDto: CreateDocumentRelationDto) {
    return this.documentRelationsService.create(createDocumentRelationDto);
  }

  @Get()
  findAll() {
    return this.documentRelationsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.documentRelationsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDocumentRelationDto: UpdateDocumentRelationDto) {
    return this.documentRelationsService.update(+id, updateDocumentRelationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.documentRelationsService.remove(+id);
  }
}
