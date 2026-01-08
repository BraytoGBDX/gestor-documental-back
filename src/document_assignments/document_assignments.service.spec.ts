import { Test, TestingModule } from '@nestjs/testing';
import { DocumentAssignmentsService } from './document_assignments.service';

describe('DocumentAssignmentsService', () => {
  let service: DocumentAssignmentsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DocumentAssignmentsService],
    }).compile();

    service = module.get<DocumentAssignmentsService>(DocumentAssignmentsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
