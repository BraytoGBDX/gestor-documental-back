import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { DocumentsModule } from './documents/documents.module';
import { AlertsModule } from './alerts/alerts.module';
import { DocumentAssignmentsModule } from './document_assignments/document_assignments.module';
import { DocumentRelationsModule } from './document_relations/document_relations.module';
import { AuditLogModule } from './audit_log/audit_log.module';
import { DepartmentsModule } from './departments/departments.module';
import { DocumentFilesModule } from './document_files/document_files.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), PrismaModule, UsersModule, DocumentsModule, AlertsModule, DocumentAssignmentsModule, DocumentRelationsModule, AuditLogModule, DepartmentsModule, DocumentFilesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
