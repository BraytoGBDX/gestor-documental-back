import { Injectable, BadRequestException } from '@nestjs/common';
import { CreateAlertDto } from './dto/create-alert.dto';
import { UpdateAlertDto } from './dto/update-alert.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AlertsService {
  constructor(private readonly prisma: PrismaService) {}

  create(createAlertDto: CreateAlertDto) {
    const data: any = {
      userId: createAlertDto.userId != null ? Number(createAlertDto.userId) : undefined,
      departmentId: createAlertDto.departmentId != null ? Number(createAlertDto.departmentId) : undefined,
      documentId: createAlertDto.documentId != null ? Number(createAlertDto.documentId) : undefined,
      assignmentId: createAlertDto.assignmentId != null ? Number(createAlertDto.assignmentId) : undefined,
      notificationType: createAlertDto.notificationType != null ? String(createAlertDto.notificationType) : undefined,
      message: createAlertDto.message != null ? String(createAlertDto.message) : undefined,
      isRead: createAlertDto.isRead != null ? Boolean(createAlertDto.isRead) : false,
    };

    if (!data.userId || !data.departmentId || !data.documentId || !data.notificationType || !data.message) {
      throw new BadRequestException('missing required alert fields');
    }

    return this.prisma.notifications.create({ data });
  }

  findAll() {
    return this.prisma.notifications.findMany();
  }

  findOne(id: number) {
    return this.prisma.notifications.findUnique({ where: { id } });
  }

  findByDocument(documentId: number) {
    return this.prisma.notifications.findMany({ where: { documentId } });
  }

  update(id: number, updateAlertDto: UpdateAlertDto) {
    const data: any = {};
    if (updateAlertDto.userId !== undefined) data.userId = Number(updateAlertDto.userId);
    if (updateAlertDto.departmentId !== undefined) data.departmentId = Number(updateAlertDto.departmentId);
    if (updateAlertDto.documentId !== undefined) data.documentId = Number(updateAlertDto.documentId);
    if (updateAlertDto.assignmentId !== undefined) data.assignmentId = Number(updateAlertDto.assignmentId);
    if (updateAlertDto.notificationType !== undefined) data.notificationType = String(updateAlertDto.notificationType);
    if (updateAlertDto.message !== undefined) data.message = String(updateAlertDto.message);
    if (updateAlertDto.isRead !== undefined) data.isRead = Boolean(updateAlertDto.isRead);

    return this.prisma.notifications.update({ where: { id }, data });
  }

  remove(id: number) {
    return this.prisma.notifications.delete({ where: { id } });
  }
}
