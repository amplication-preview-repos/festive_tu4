import { Module } from "@nestjs/common";
import { ToDoItemModuleBase } from "./base/toDoItem.module.base";
import { ToDoItemService } from "./toDoItem.service";
import { ToDoItemController } from "./toDoItem.controller";
import { ToDoItemResolver } from "./toDoItem.resolver";

@Module({
  imports: [ToDoItemModuleBase],
  controllers: [ToDoItemController],
  providers: [ToDoItemService, ToDoItemResolver],
  exports: [ToDoItemService],
})
export class ToDoItemModule {}
