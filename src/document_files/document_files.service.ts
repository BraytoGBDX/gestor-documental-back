import { Injectable, BadRequestException } from '@nestjs/common';
import { CreateDocumentFileDto } from './dto/create-document_file.dto';
import { UpdateDocumentFileDto } from './dto/update-document_file.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class DocumentFilesService {
  constructor(private readonly prisma: PrismaService) {}

  create(createDocumentFileDto: CreateDocumentFileDto) {
    const data: any = {
      documentId: createDocumentFileDto.documentId != null ? Number(createDocumentFileDto.documentId) : undefined,
      name: createDocumentFileDto.name != null ? String(createDocumentFileDto.name) : undefined,
      filePath: createDocumentFileDto.filePath != null ? String(createDocumentFileDto.filePath) : undefined,
    };

    if (!data.documentId || !data.name || !data.userId || !data.filePath) {
      throw new BadRequestException('missing required document file fields');
    }

    return this.prisma.documentFile.create({ data });
  }

  findAll() {
    return this.prisma.documentFile.findMany();
  }

  findOne(id: number) {
    return this.prisma.documentFile.findUnique({ where: { id } });
  }

  findByDocument(documentId: number) {
    return this.prisma.documentFile.findMany({ where: { documentId } });
  }

  update(id: number, updateDocumentFileDto: UpdateDocumentFileDto) {
    const data: any = {};
    if (updateDocumentFileDto.documentId !== undefined) data.documentId = Number(updateDocumentFileDto.documentId);
    if (updateDocumentFileDto.name !== undefined) data.name = String(updateDocumentFileDto.name);
    if (updateDocumentFileDto.filePath !== undefined) data.filePath = String(updateDocumentFileDto.filePath);

    return this.prisma.documentFile.update({ where: { id }, data });
  }

  remove(id: number) {
    return this.prisma.documentFile.delete({ where: { id } });
  }
}
