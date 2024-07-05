import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";
import { Context } from "./contexts";
import { useContext, useState } from "react";

function App() {
  const { data } = useContext(Context);
  const [employeeData, setEmployeeData] = useState(data);
  const value = { data: employeeData, setData: setEmployeeData };
  return (
    <Context.Provider value={value}>
      <RouterProvider router={router}></RouterProvider>
    </Context.Provider>
  );
}

export default App;
