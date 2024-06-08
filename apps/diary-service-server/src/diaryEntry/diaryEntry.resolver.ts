import * as graphql from "@nestjs/graphql";
import { DiaryEntryResolverBase } from "./base/diaryEntry.resolver.base";
import { DiaryEntry } from "./base/DiaryEntry";
import { DiaryEntryService } from "./diaryEntry.service";

@graphql.Resolver(() => DiaryEntry)
export class DiaryEntryResolver extends DiaryEntryResolverBase {
  constructor(protected readonly service: DiaryEntryService) {
    super(service);
  }
}
