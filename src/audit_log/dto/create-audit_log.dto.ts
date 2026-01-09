import { ApiProperty } from '@nestjs/swagger';
import { AUDIT_ACTION } from '@prisma/client';
import {
  IsEnum,
  IsInt,
  IsObject,
  IsOptional,
  Min,
} from 'class-validator';

export class CreateAuditLogDto {
  @ApiProperty({ example: 10 })
  @IsInt()
  @Min(1)
  documentId: number;

  @ApiProperty({
    enum: AUDIT_ACTION,
    example: AUDIT_ACTION.ARCHIVED,
  })
  @IsEnum(AUDIT_ACTION)
  action: AUDIT_ACTION;

  @ApiProperty({ example: 25 })
  @IsInt()
  @Min(1)
  userId: number;

  @ApiProperty({
    required: false,
    type: Object,
    example: {
      previousStatus: 'DRAFT',
      newStatus: 'SENT',
    },
  })
  @IsOptional()
  @IsObject()
  details?: Record<string, any>;
}
