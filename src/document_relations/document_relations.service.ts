import { Injectable, BadRequestException } from '@nestjs/common';
import { CreateDocumentRelationDto } from './dto/create-document_relation.dto';
import { UpdateDocumentRelationDto } from './dto/update-document_relation.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class DocumentRelationsService {
  constructor(private readonly prisma: PrismaService) {}

  create(createDocumentRelationDto: CreateDocumentRelationDto) {
    const data: any = {
      documentId: createDocumentRelationDto.documentId != null ? Number(createDocumentRelationDto.documentId) : undefined,
      relatedDocumentId: createDocumentRelationDto.relatedDocumentId != null ? Number(createDocumentRelationDto.relatedDocumentId) : undefined,
      relationType: createDocumentRelationDto.relationType != null ? String(createDocumentRelationDto.relationType) : undefined,
    };

    if (!data.documentId || !data.relatedDocumentId || !data.relationType) {
      throw new BadRequestException('missing required document relation fields');
    }

    return this.prisma.document_relations.create({ data });
  }

  findAll() {
    return this.prisma.document_relations.findMany();
  }

  findOne(id: number) {
    return this.prisma.document_relations.findUnique({ where: { id } });
  }

  findByDocument(documentId: number) {
    return this.prisma.document_relations.findMany({ where: { documentId } });
  }

  update(id: number, updateDocumentRelationDto: UpdateDocumentRelationDto) {
    const data: any = {};
    if (updateDocumentRelationDto.documentId !== undefined) data.documentId = Number(updateDocumentRelationDto.documentId);
    if (updateDocumentRelationDto.relatedDocumentId !== undefined) data.relatedDocumentId = Number(updateDocumentRelationDto.relatedDocumentId);
    if (updateDocumentRelationDto.relationType !== undefined) data.relationType = String(updateDocumentRelationDto.relationType);

    return this.prisma.document_relations.update({ where: { id }, data });
  }

  remove(id: number) {
    return this.prisma.document_relations.delete({ where: { id } });
  }
}
