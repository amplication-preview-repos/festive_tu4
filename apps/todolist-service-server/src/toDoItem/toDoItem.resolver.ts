import * as graphql from "@nestjs/graphql";
import { ToDoItemResolverBase } from "./base/toDoItem.resolver.base";
import { ToDoItem } from "./base/ToDoItem";
import { ToDoItemService } from "./toDoItem.service";

@graphql.Resolver(() => ToDoItem)
export class ToDoItemResolver extends ToDoItemResolverBase {
  constructor(protected readonly service: ToDoItemService) {
    super(service);
  }
}
