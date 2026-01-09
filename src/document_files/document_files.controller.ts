import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DocumentFilesService } from './document_files.service';
import { CreateDocumentFileDto } from './dto/create-document_file.dto';
import { UpdateDocumentFileDto } from './dto/update-document_file.dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('document-files')
@Controller('document-files')
export class DocumentFilesController {
  constructor(private readonly documentFilesService: DocumentFilesService) {}

  @Post()
  create(@Body() createDocumentFileDto: CreateDocumentFileDto) {
    return this.documentFilesService.create(createDocumentFileDto);
  }

  @Get()
  findAll() {
    return this.documentFilesService.findAll();
  }

  @Get('by-document/:documentId')
  @ApiOperation({ summary: 'Find files by document id' })
  findByDocument(@Param('documentId') documentId: string) {
    return this.documentFilesService.findByDocument(+documentId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.documentFilesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDocumentFileDto: UpdateDocumentFileDto) {
    return this.documentFilesService.update(+id, updateDocumentFileDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.documentFilesService.remove(+id);
  }
}
