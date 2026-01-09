import { ApiProperty } from '@nestjs/swagger';
import { USER_ROLE } from '@prisma/client';

export class CreateUserDto {
	@ApiProperty()
	name: string;

	@ApiProperty()
	lastname: string;

	@ApiProperty()
	departmentId: number;

	@ApiProperty({ enum: Object.values(USER_ROLE) })
	role: USER_ROLE;

	@ApiProperty({ required: false })
	isActive?: boolean;
}
