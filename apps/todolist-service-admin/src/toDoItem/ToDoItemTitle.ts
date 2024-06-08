import { ToDoItem as TToDoItem } from "../api/toDoItem/ToDoItem";

export const TODOITEM_TITLE_FIELD = "title";

export const ToDoItemTitle = (record: TToDoItem): string => {
  return record.title?.toString() || String(record.id);
};
