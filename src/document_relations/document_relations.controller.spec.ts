import { Test, TestingModule } from '@nestjs/testing';
import { DocumentRelationsController } from './document_relations.controller';
import { DocumentRelationsService } from './document_relations.service';

describe('DocumentRelationsController', () => {
  let controller: DocumentRelationsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DocumentRelationsController],
      providers: [DocumentRelationsService],
    }).compile();

    controller = module.get<DocumentRelationsController>(DocumentRelationsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
