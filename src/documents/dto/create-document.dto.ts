import { ApiProperty } from '@nestjs/swagger';
import { TYPE_DOC } from '@prisma/client';

export class CreateDocumentDto {
	@ApiProperty({ enum: Object.values(TYPE_DOC) })
	type: TYPE_DOC;

	@ApiProperty()
	numSolicitud: string;

	@ApiProperty()
	userId: number;

	@ApiProperty({ required: false })
	volante?: string;

	@ApiProperty({ required: false })
	folio?: string;

	@ApiProperty({ required: false, type: Object })
	comments?: any;

	@ApiProperty()
	asunto: string;

	@ApiProperty({ required: false })
	expiredAt?: string;

	@ApiProperty({ required: false })
	isArchived?: boolean;
}
