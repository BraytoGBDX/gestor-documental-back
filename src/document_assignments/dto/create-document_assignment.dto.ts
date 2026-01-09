import { ApiProperty } from '@nestjs/swagger';
import { ACCESS_TYPE } from '@prisma/client';
import {
  IsDateString,
  IsEnum,
  IsInt,
  IsOptional,
  Min,
} from 'class-validator';

export class CreateDocumentAssignmentDto {
  @ApiProperty({ example: 10 })
  @IsInt()
  @Min(1)
  documentId: number;

  @ApiProperty({ example: 1, description: 'Departamento origen' })
  @IsInt()
  @Min(1)
  fromDepartmentId: number;

  @ApiProperty({ example: 3, description: 'Departamento destino' })
  @IsInt()
  @Min(1)
  toDepartmentId: number;

  @ApiProperty({ example: 25, description: 'Usuario que asigna' })
  @IsInt()
  @Min(1)
  userId: number;

  @ApiProperty({
    enum: ACCESS_TYPE,
    example: ACCESS_TYPE.READ,
  })
  @IsEnum(ACCESS_TYPE)
  accessType: ACCESS_TYPE;

  @ApiProperty({
    example: 1,
    description: 'Orden secuencial del flujo del documento',
  })
  @IsInt()
  @Min(1)
  sequenceOrder: number;

  @ApiProperty({
    required: false,
    example: '2026-01-09T09:30:00.000Z',
    description: 'Fecha de asignación (ISO 8601)',
  })
  @IsOptional()
  @IsDateString()
  assignedAt?: string;
}
