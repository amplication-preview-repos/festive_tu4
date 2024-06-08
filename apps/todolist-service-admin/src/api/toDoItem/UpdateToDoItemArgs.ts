import { ToDoItemWhereUniqueInput } from "./ToDoItemWhereUniqueInput";
import { ToDoItemUpdateInput } from "./ToDoItemUpdateInput";

export type UpdateToDoItemArgs = {
  where: ToDoItemWhereUniqueInput;
  data: ToDoItemUpdateInput;
};
