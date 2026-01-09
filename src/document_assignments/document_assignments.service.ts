import { Injectable, BadRequestException } from '@nestjs/common';
import { CreateDocumentAssignmentDto } from './dto/create-document_assignment.dto';
import { UpdateDocumentAssignmentDto } from './dto/update-document_assignment.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class DocumentAssignmentsService {
  constructor(private readonly prisma: PrismaService) {}

  create(createDocumentAssignmentDto: CreateDocumentAssignmentDto) {
    const data: any = {
      documentId: createDocumentAssignmentDto.documentId != null ? Number(createDocumentAssignmentDto.documentId) : undefined,
      fromDepartmentId: createDocumentAssignmentDto.fromDepartmentId != null ? Number(createDocumentAssignmentDto.fromDepartmentId) : undefined,
      toDepartmentId: createDocumentAssignmentDto.toDepartmentId != null ? Number(createDocumentAssignmentDto.toDepartmentId) : undefined,
      userId: createDocumentAssignmentDto.userId != null ? Number(createDocumentAssignmentDto.userId) : undefined,
      accessType: createDocumentAssignmentDto.accessType != null ? String(createDocumentAssignmentDto.accessType) : undefined,
      sequenceOrder: createDocumentAssignmentDto.sequenceOrder != null ? Number(createDocumentAssignmentDto.sequenceOrder) : undefined,
      assignedAt: createDocumentAssignmentDto.assignedAt != null ? new Date(createDocumentAssignmentDto.assignedAt) : undefined,
    };

    if (!data.documentId || !data.toDepartmentId || !data.userId || !data.accessType) {
      throw new BadRequestException('missing required document assignment fields');
    }

    return this.prisma.documents_assignments.create({ data });
  }

  findAll() {
    return this.prisma.documents_assignments.findMany();
  }

  findOne(id: number) {
    return this.prisma.documents_assignments.findUnique({ where: { id } });
  }

  findByDocument(documentId: number) {
    return this.prisma.documents_assignments.findMany({ where: { documentId } });
  }

  update(id: number, updateDocumentAssignmentDto: UpdateDocumentAssignmentDto) {
    const data: any = {};
    if (updateDocumentAssignmentDto.documentId !== undefined) data.documentId = Number(updateDocumentAssignmentDto.documentId);
    if (updateDocumentAssignmentDto.fromDepartmentId !== undefined) data.fromDepartmentId = Number(updateDocumentAssignmentDto.fromDepartmentId);
    if (updateDocumentAssignmentDto.toDepartmentId !== undefined) data.toDepartmentId = Number(updateDocumentAssignmentDto.toDepartmentId);
    if (updateDocumentAssignmentDto.userId !== undefined) data.userId = Number(updateDocumentAssignmentDto.userId);
    if (updateDocumentAssignmentDto.accessType !== undefined) data.accessType = String(updateDocumentAssignmentDto.accessType);
    if (updateDocumentAssignmentDto.sequenceOrder !== undefined) data.sequenceOrder = Number(updateDocumentAssignmentDto.sequenceOrder);

    return this.prisma.documents_assignments.update({ where: { id }, data });
  }

  remove(id: number) {
    return this.prisma.documents_assignments.delete({ where: { id } });
  }
}
