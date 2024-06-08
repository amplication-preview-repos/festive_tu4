import { SortOrder } from "../../util/SortOrder";

export type ToDoItemOrderByInput = {
  completed?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  dueDate?: SortOrder;
  id?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
