import { Module } from '@nestjs/common';
import { DocumentRelationsService } from './document_relations.service';
import { DocumentRelationsController } from './document_relations.controller';

@Module({
  controllers: [DocumentRelationsController],
  providers: [DocumentRelationsService],
})
export class DocumentRelationsModule {}
