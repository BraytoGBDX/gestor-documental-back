import { Test, TestingModule } from '@nestjs/testing';
import { DocumentAssignmentsController } from './document_assignments.controller';
import { DocumentAssignmentsService } from './document_assignments.service';

describe('DocumentAssignmentsController', () => {
  let controller: DocumentAssignmentsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DocumentAssignmentsController],
      providers: [DocumentAssignmentsService],
    }).compile();

    controller = module.get<DocumentAssignmentsController>(DocumentAssignmentsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
