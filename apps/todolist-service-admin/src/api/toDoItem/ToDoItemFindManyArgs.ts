import { ToDoItemWhereInput } from "./ToDoItemWhereInput";
import { ToDoItemOrderByInput } from "./ToDoItemOrderByInput";

export type ToDoItemFindManyArgs = {
  where?: ToDoItemWhereInput;
  orderBy?: Array<ToDoItemOrderByInput>;
  skip?: number;
  take?: number;
};
