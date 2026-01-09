import { ApiProperty } from '@nestjs/swagger';
import { RELATION_TYPE } from '@prisma/client';
import {
  IsEnum,
  IsInt,
  Min,
} from 'class-validator';

export class CreateDocumentRelationDto {
  @ApiProperty({ example: 10 })
  @IsInt()
  @Min(1)
  documentId: number;

  @ApiProperty({ example: 25 })
  @IsInt()
  @Min(1)
  relatedDocumentId: number;

  @ApiProperty({
    enum: RELATION_TYPE,
    example: RELATION_TYPE.ANEXO,
  })
  @IsEnum(RELATION_TYPE)
  relationType: RELATION_TYPE;
}
