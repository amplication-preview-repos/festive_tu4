import { ToDoItemWhereInput } from "./ToDoItemWhereInput";

export type ToDoItemListRelationFilter = {
  every?: ToDoItemWhereInput;
  some?: ToDoItemWhereInput;
  none?: ToDoItemWhereInput;
};
