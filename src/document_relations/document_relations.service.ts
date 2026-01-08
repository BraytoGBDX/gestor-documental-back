import { Injectable } from '@nestjs/common';
import { CreateDocumentRelationDto } from './dto/create-document_relation.dto';
import { UpdateDocumentRelationDto } from './dto/update-document_relation.dto';

@Injectable()
export class DocumentRelationsService {
  create(createDocumentRelationDto: CreateDocumentRelationDto) {
    return 'This action adds a new documentRelation';
  }

  findAll() {
    return `This action returns all documentRelations`;
  }

  findOne(id: number) {
    return `This action returns a #${id} documentRelation`;
  }

  update(id: number, updateDocumentRelationDto: UpdateDocumentRelationDto) {
    return `This action updates a #${id} documentRelation`;
  }

  remove(id: number) {
    return `This action removes a #${id} documentRelation`;
  }
}
