import { ApiProperty } from '@nestjs/swagger';
import { ALERT_TYPE } from '@prisma/client';
import {
  IsBoolean,
  IsEnum,
  IsInt,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';

export class CreateAlertDto {
  @ApiProperty({ example: 25 })
  @IsInt()
  @Min(1)
  userId: number;

  @ApiProperty({ example: 3 })
  @IsInt()
  @Min(1)
  departmentId: number;

  @ApiProperty({ example: 10 })
  @IsInt()
  @Min(1)
  documentId: number;

  @ApiProperty({ example: 42 })
  @IsInt()
  @Min(1)
  assignmentId: number;

  @ApiProperty({
    enum: ALERT_TYPE,
    example: ALERT_TYPE.AVISO,
  })
  @IsEnum(ALERT_TYPE)
  notificationType: ALERT_TYPE;

  @ApiProperty({
    example: 'Se te ha asignado un nuevo documento',
  })
  @IsString()
  message: string;

  @ApiProperty({
    required: false,
    example: false,
  })
  @IsOptional()
  @IsBoolean()
  isRead?: boolean;
}
