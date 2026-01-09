import { ApiProperty } from '@nestjs/swagger';
import { AUDIT_ACTION } from '@prisma/client';

export class CreateAuditLogDto {
	@ApiProperty()
	documentId: number;

	@ApiProperty({ enum: Object.values(AUDIT_ACTION) })
	action: AUDIT_ACTION;

	@ApiProperty()
	userId: number;

	@ApiProperty({ required: false, type: Object })
	details?: any;
}
