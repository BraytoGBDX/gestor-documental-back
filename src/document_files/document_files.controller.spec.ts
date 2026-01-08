import { Test, TestingModule } from '@nestjs/testing';
import { DocumentFilesController } from './document_files.controller';
import { DocumentFilesService } from './document_files.service';

describe('DocumentFilesController', () => {
  let controller: DocumentFilesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DocumentFilesController],
      providers: [DocumentFilesService],
    }).compile();

    controller = module.get<DocumentFilesController>(DocumentFilesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
