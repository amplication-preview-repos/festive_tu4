import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ToDoItemService } from "./toDoItem.service";
import { ToDoItemControllerBase } from "./base/toDoItem.controller.base";

@swagger.ApiTags("toDoItems")
@common.Controller("toDoItems")
export class ToDoItemController extends ToDoItemControllerBase {
  constructor(protected readonly service: ToDoItemService) {
    super(service);
  }
}
