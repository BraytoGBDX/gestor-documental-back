import { ApiProperty } from '@nestjs/swagger';
import { TYPE_DOC } from '@prisma/client';
import {
  IsBoolean,
  IsDateString,
  IsEnum,
  IsInt,
  IsObject,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';

export class CreateDocumentDto {
  @ApiProperty({
    enum: TYPE_DOC,
    example: TYPE_DOC.OFICIO,
  })
  @IsEnum(TYPE_DOC)
  type: TYPE_DOC;

  @ApiProperty({ example: 'SOL-2026-001' })
  @IsString()
  numSolicitud: string;

  @ApiProperty({ example: 25 })
  @IsInt()
  @Min(1)
  userId: number;

  @ApiProperty({
    required: false,
    example: 'VOL-123',
  })
  @IsOptional()
  @IsString()
  volante?: string;

  @ApiProperty({
    required: false,
    example: 'FOL-456',
  })
  @IsOptional()
  @IsString()
  folio?: string;

  @ApiProperty({
    required: false,
    type: Object,
    example: {
      prioridad: 'alta',
      observaciones: 'Documento urgente',
    },
  })
  @IsOptional()
  @IsObject()
  comments?: Record<string, any>;

  @ApiProperty({ example: 'Solicitud de información' })
  @IsString()
  asunto: string;

  @ApiProperty({
    required: false,
    example: '2026-02-01T00:00:00.000Z',
  })
  @IsOptional()
  @IsDateString()
  expiredAt?: string;

  @ApiProperty({
    required: false,
    example: false,
  })
  @IsOptional()
  @IsBoolean()
  isArchived?: boolean;
}
