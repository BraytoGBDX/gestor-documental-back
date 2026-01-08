import { Injectable } from '@nestjs/common';
import { CreateDocumentAssignmentDto } from './dto/create-document_assignment.dto';
import { UpdateDocumentAssignmentDto } from './dto/update-document_assignment.dto';

@Injectable()
export class DocumentAssignmentsService {
  create(createDocumentAssignmentDto: CreateDocumentAssignmentDto) {
    return 'This action adds a new documentAssignment';
  }

  findAll() {
    return `This action returns all documentAssignments`;
  }

  findOne(id: number) {
    return `This action returns a #${id} documentAssignment`;
  }

  update(id: number, updateDocumentAssignmentDto: UpdateDocumentAssignmentDto) {
    return `This action updates a #${id} documentAssignment`;
  }

  remove(id: number) {
    return `This action removes a #${id} documentAssignment`;
  }
}
