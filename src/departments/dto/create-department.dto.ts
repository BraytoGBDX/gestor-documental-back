import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsInt, IsOptional, IsString, Min } from 'class-validator';

export class CreateDepartmentDto {
  @ApiProperty({ example: 'Dirección General' })
  @IsString()
  name: string;

  @ApiProperty({ required: false, example: 1 })
  @IsOptional()
  @IsInt()
  parentId?: number;

  @ApiProperty({ example: 1, description: 'Nivel jerárquico' })
  @IsInt()
  @Min(1)
  level: number;

  @ApiProperty({ required: false, example: true })
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}
