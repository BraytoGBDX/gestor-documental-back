import { ApiProperty } from '@nestjs/swagger';
import { RELATION_TYPE } from '@prisma/client';

export class CreateDocumentRelationDto {
	@ApiProperty()
	documentId: number;

	@ApiProperty()
	relatedDocumentId: number;

	@ApiProperty({ enum: Object.values(RELATION_TYPE) })
	relationType: RELATION_TYPE;
}
