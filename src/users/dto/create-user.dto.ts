import { ApiProperty } from '@nestjs/swagger';
import { USER_ROLE } from '@prisma/client';
import {
  IsBoolean,
  IsEnum,
  IsInt,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'Juan' })
  @IsString()
  name: string;

  @ApiProperty({ example: 'Pérez' })
  @IsString()
  lastname: string;

  @ApiProperty({required:false, example: 3 })
  @IsInt()
  @Min(1)
  departmentId: number;

  @ApiProperty({
    enum: USER_ROLE,
    example: USER_ROLE.USER,
  })
  @IsEnum(USER_ROLE)
  role: USER_ROLE;

  @ApiProperty({
    required: false,
    example: true,
  })
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}
