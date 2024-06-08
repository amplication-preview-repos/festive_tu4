import { Module } from "@nestjs/common";
import { DiaryEntryModuleBase } from "./base/diaryEntry.module.base";
import { DiaryEntryService } from "./diaryEntry.service";
import { DiaryEntryController } from "./diaryEntry.controller";
import { DiaryEntryResolver } from "./diaryEntry.resolver";

@Module({
  imports: [DiaryEntryModuleBase],
  controllers: [DiaryEntryController],
  providers: [DiaryEntryService, DiaryEntryResolver],
  exports: [DiaryEntryService],
})
export class DiaryEntryModule {}
