import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  BooleanInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const ToDoItemCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <BooleanInput label="Completed" source="completed" />
        <TextInput label="Description" multiline source="description" />
        <DateTimeInput label="DueDate" source="dueDate" />
        <TextInput label="Title" source="title" />
      </SimpleForm>
    </Create>
  );
};
