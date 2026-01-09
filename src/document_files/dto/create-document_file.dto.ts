import { ApiProperty } from '@nestjs/swagger';

export class CreateDocumentFileDto {
	@ApiProperty()
	documentId: number;

	@ApiProperty()
	name: string;

	@ApiProperty()
	userId: number;

	@ApiProperty()
	filePath: string;
}
