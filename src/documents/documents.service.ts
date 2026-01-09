import { Injectable, BadRequestException } from '@nestjs/common';
import { CreateDocumentDto } from './dto/create-document.dto';
import { UpdateDocumentDto } from './dto/update-document.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class DocumentsService {
  constructor(private readonly prisma: PrismaService) {}

  create(createDocumentDto: CreateDocumentDto) {
    const data: any = {
      type: createDocumentDto.type != null ? String(createDocumentDto.type) : undefined,
      numSolicitud: createDocumentDto.numSolicitud != null ? String(createDocumentDto.numSolicitud) : undefined,
      userId: createDocumentDto.userId != null ? Number(createDocumentDto.userId) : undefined,
      created: new Date(createDocumentDto.created),
      volante: createDocumentDto.volante != null ? String(createDocumentDto.volante) : undefined,
      folio: createDocumentDto.folio != null ? String(createDocumentDto.folio) : undefined,
      comments: createDocumentDto.comments != null ? createDocumentDto.comments : undefined,
      asunto: createDocumentDto.asunto != null ? String(createDocumentDto.asunto) : undefined,
      expiredAt: createDocumentDto.expiredAt != null ? new Date(createDocumentDto.expiredAt) : undefined,
      isArchived: createDocumentDto.isArchived != null ? Boolean(createDocumentDto.isArchived) : false,
      createdAt: new Date(),
    };

    if (!data.numSolicitud || !data.userId || !data.asunto || !data.type) {
      throw new BadRequestException('missing required document fields');
    }

    return this.prisma.documents.create({ data });
  }

  findAll() {
    return this.prisma.documents.findMany();
  }

  findOne(id: number) {
    return this.prisma.documents.findUnique({ where: { id } });
  }

  // For consistency with other services: get by document id
  findByDocument(documentId: number) {
    return this.prisma.documents.findUnique({ where: { id: documentId } });
  }

  update(id: number, updateDocumentDto: UpdateDocumentDto) {
    const data: any = {};
    if (updateDocumentDto.type !== undefined) data.type = String(updateDocumentDto.type);
    if (updateDocumentDto.numSolicitud !== undefined) data.numSolicitud = String(updateDocumentDto.numSolicitud);
    if (updateDocumentDto.userId !== undefined) data.userId = Number(updateDocumentDto.userId);
    if (updateDocumentDto.volante !== undefined) data.volante = String(updateDocumentDto.volante);
    if (updateDocumentDto.folio !== undefined) data.folio = String(updateDocumentDto.folio);
    if (updateDocumentDto.comments !== undefined) data.comments = updateDocumentDto.comments;
    if (updateDocumentDto.asunto !== undefined) data.asunto = String(updateDocumentDto.asunto);
    if (updateDocumentDto.isArchived !== undefined) data.isArchived = Boolean(updateDocumentDto.isArchived);

    return this.prisma.documents.update({ where: { id }, data });
  }

  remove(id: number) {
    return this.prisma.documents.delete({ where: { id } });
  }
}
