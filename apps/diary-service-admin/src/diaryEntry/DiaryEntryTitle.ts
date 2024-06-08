import { DiaryEntry as TDiaryEntry } from "../api/diaryEntry/DiaryEntry";

export const DIARYENTRY_TITLE_FIELD = "title";

export const DiaryEntryTitle = (record: TDiaryEntry): string => {
  return record.title?.toString() || String(record.id);
};
