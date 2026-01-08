import { Test, TestingModule } from '@nestjs/testing';
import { DocumentRelationsService } from './document_relations.service';

describe('DocumentRelationsService', () => {
  let service: DocumentRelationsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DocumentRelationsService],
    }).compile();

    service = module.get<DocumentRelationsService>(DocumentRelationsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
