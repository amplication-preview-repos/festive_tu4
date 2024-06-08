export type ToDoItem = {
  completed: boolean | null;
  createdAt: Date;
  description: string | null;
  dueDate: Date | null;
  id: string;
  title: string | null;
  updatedAt: Date;
};
