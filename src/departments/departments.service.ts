import { Injectable, BadRequestException } from '@nestjs/common';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class DepartmentsService {
  constructor(private readonly prisma: PrismaService) {}

  create(createDepartmentDto: CreateDepartmentDto) {
    const data: any = {
      name: createDepartmentDto.name != null ? String(createDepartmentDto.name) : undefined,
      parentId: createDepartmentDto.parentId != null ? Number(createDepartmentDto.parentId) : undefined,
      level: createDepartmentDto.level != null ? Number(createDepartmentDto.level) : undefined,
      isActive: createDepartmentDto.isActive != null ? Boolean(createDepartmentDto.isActive) : true,
    };

    if (!data.name) {
      throw new BadRequestException('name is required');
    }
    if (data.level == null || Number.isNaN(data.level)) {
      throw new BadRequestException('level is required and must be a number');
    }

    return this.prisma.departments.create({ data });
  }

  findAll() {
    return this.prisma.departments.findMany();
  }

  findOne(id: number) {
    return this.prisma.departments.findUnique({ where: { id } });
  }

  findByDocument(documentId: number) {
    // Departments are not directly linked to documents; return empty for now
    return [];
  }

  update(id: number, updateDepartmentDto: UpdateDepartmentDto) {
    const data: any = {};
    if (updateDepartmentDto.name !== undefined) data.name = String(updateDepartmentDto.name);
    if (updateDepartmentDto.parentId !== undefined) data.parentId = Number(updateDepartmentDto.parentId);
    if (updateDepartmentDto.level !== undefined) data.level = Number(updateDepartmentDto.level);
    if (updateDepartmentDto.isActive !== undefined) data.isActive = Boolean(updateDepartmentDto.isActive);

    return this.prisma.departments.update({ where: { id }, data });
  }

  remove(id: number) {
    return this.prisma.departments.delete({ where: { id } });
  }
}
