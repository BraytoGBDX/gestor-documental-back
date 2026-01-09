import { ApiProperty } from '@nestjs/swagger';
import { ACCESS_TYPE } from '@prisma/client';

export class CreateDocumentAssignmentDto {
	@ApiProperty()
	documentId: number;

	@ApiProperty()
	fromDepartmentId: number;

	@ApiProperty()
	toDepartmentId: number;

	@ApiProperty()
	userId: number;

	@ApiProperty({ enum: Object.values(ACCESS_TYPE) })
	accessType: ACCESS_TYPE;

	@ApiProperty()
	sequenceOrder: number;

	@ApiProperty({ required: false })
	assignedAt?: string;
}
