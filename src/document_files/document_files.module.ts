import { Module } from '@nestjs/common';
import { DocumentFilesService } from './document_files.service';
import { DocumentFilesController } from './document_files.controller';

@Module({
  controllers: [DocumentFilesController],
  providers: [DocumentFilesService],
})
export class DocumentFilesModule {}
