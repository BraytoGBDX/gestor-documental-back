import { Injectable, BadRequestException } from '@nestjs/common';
import { CreateAuditLogDto } from './dto/create-audit_log.dto';
import { UpdateAuditLogDto } from './dto/update-audit_log.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AuditLogService {
  constructor(private readonly prisma: PrismaService) {}

  create(createAuditLogDto: CreateAuditLogDto) {
    const data: any = {
      documentId: createAuditLogDto.documentId != null ? Number(createAuditLogDto.documentId) : undefined,
      action: createAuditLogDto.action != null ? String(createAuditLogDto.action) : undefined,
      userId: createAuditLogDto.userId != null ? Number(createAuditLogDto.userId) : undefined,
      details: createAuditLogDto.details != null ? createAuditLogDto.details : undefined,
    };

    if (!data.documentId || !data.action || !data.userId) {
      throw new BadRequestException('missing required audit log fields');
    }

    return this.prisma.audit_log.create({ data });
  }

  findAll() {
    return this.prisma.audit_log.findMany();
  }

  findOne(id: number) {
    return this.prisma.audit_log.findUnique({ where: { id } });
  }

  findByDocument(documentId: number) {
    return this.prisma.audit_log.findMany({ where: { documentId } });
  }

  update(id: number, updateAuditLogDto: UpdateAuditLogDto) {
    const data: any = {};
    if (updateAuditLogDto.documentId !== undefined) data.documentId = Number(updateAuditLogDto.documentId);
    if (updateAuditLogDto.action !== undefined) data.action = String(updateAuditLogDto.action);
    if (updateAuditLogDto.userId !== undefined) data.userId = Number(updateAuditLogDto.userId);
    if (updateAuditLogDto.details !== undefined) data.details = updateAuditLogDto.details;

    return this.prisma.audit_log.update({ where: { id }, data });
  }

  remove(id: number) {
    return this.prisma.audit_log.delete({ where: { id } });
  }
}
