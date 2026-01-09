import { ApiProperty } from '@nestjs/swagger';
import {
  IsInt,
  IsString,
  Min,
} from 'class-validator';

export class CreateDocumentFileDto {
  @ApiProperty({ example: 10 })
  @IsInt()
  @Min(1)
  documentId: number;

  @ApiProperty({ example: 'oficio_123.pdf' })
  @IsString()
  name: string;

  @ApiProperty({ example: 25 })
  @IsInt()
  @Min(1)
  userId: number;

  @ApiProperty({
    example: '/uploads/documents/oficio_123.pdf',
    description: 'Ruta o URL del archivo',
  })
  @IsString()
  filePath: string;
}
