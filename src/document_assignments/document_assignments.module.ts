import { Module } from '@nestjs/common';
import { DocumentAssignmentsService } from './document_assignments.service';
import { DocumentAssignmentsController } from './document_assignments.controller';

@Module({
  controllers: [DocumentAssignmentsController],
  providers: [DocumentAssignmentsService],
})
export class DocumentAssignmentsModule {}
