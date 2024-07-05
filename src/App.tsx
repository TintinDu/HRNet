import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";
import { Context } from "./contexts";
import { useContext, useState } from "react";
import { MockedData } from "./__mocks";

function App() {
  const { data } = useContext(Context);
  const [employeeData, setEmployeeData] = useState(data);

  const update = (data: MockedData) => setEmployeeData(data);

  return (
    <Context.Provider value={{ data: employeeData, update }}>
      <RouterProvider router={router}></RouterProvider>
    </Context.Provider>
  );
}

export default App;
