import { Injectable, BadRequestException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  create(createUserDto: CreateUserDto) {
    const data: any = {
      name: createUserDto.name != null ? String(createUserDto.name) : undefined,
      lastname: createUserDto.lastname != null ? String(createUserDto.lastname) : undefined,
      departmentId: createUserDto.departmentId != null ? Number(createUserDto.departmentId) : undefined,
      role: createUserDto.role != null ? String(createUserDto.role) : undefined,
      isActive: createUserDto.isActive != null ? Boolean(createUserDto.isActive) : true,
    };

    if (!data.name || !data.lastname || data.departmentId == null || !data.role) {
      throw new BadRequestException('missing required user fields');
    }

    return this.prisma.users.create({ data });
  }

  findAll() {
    return this.prisma.users.findMany();
  }

  findOne(id: number) {
    return this.prisma.users.findUnique({ where: { id } });
  }

  findByDocument(documentId: number) {
    return this.prisma.users.findMany({ where: { documents: { some: { id: documentId } } } });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    const data: any = {};
    if (updateUserDto.name !== undefined) data.name = String(updateUserDto.name);
    if (updateUserDto.lastname !== undefined) data.lastname = String(updateUserDto.lastname);
    if (updateUserDto.departmentId !== undefined) data.departmentId = Number(updateUserDto.departmentId);
    if (updateUserDto.role !== undefined) data.role = String(updateUserDto.role);
    if (updateUserDto.isActive !== undefined) data.isActive = Boolean(updateUserDto.isActive);

    return this.prisma.users.update({ where: { id }, data });
  }

  remove(id: number) {
    return this.prisma.users.delete({ where: { id } });
  }
}
