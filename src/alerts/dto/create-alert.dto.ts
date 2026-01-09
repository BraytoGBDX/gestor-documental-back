import { ApiProperty } from '@nestjs/swagger';
import { ALERT_TYPE } from '@prisma/client';

export class CreateAlertDto {
  @ApiProperty()
  userId: number;

  @ApiProperty()
  departmentId: number;

  @ApiProperty()
  documentId: number;

  @ApiProperty()
  assignmentId: number;

  @ApiProperty({ enum: Object.values(ALERT_TYPE) })
  notificationType: ALERT_TYPE;

  @ApiProperty()
  message: string;

  @ApiProperty({ required: false })
  isRead?: boolean;
}
