import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { ToDoItemList } from "./toDoItem/ToDoItemList";
import { ToDoItemCreate } from "./toDoItem/ToDoItemCreate";
import { ToDoItemEdit } from "./toDoItem/ToDoItemEdit";
import { ToDoItemShow } from "./toDoItem/ToDoItemShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"todolistService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="ToDoItem"
          list={ToDoItemList}
          edit={ToDoItemEdit}
          create={ToDoItemCreate}
          show={ToDoItemShow}
        />
      </Admin>
    </div>
  );
};

export default App;
