import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";
import { Context } from "./contexts";
import { useContext, useState, useMemo, useCallback } from "react";
import { MockedData } from "./__mocks";

function App() {
  const { data } = useContext(Context);
  const [employeeData, setEmployeeData] = useState(data);

  const update = useCallback((data: MockedData) => setEmployeeData(data), []);

  const contextValue = useMemo(
    () => ({ data: employeeData, update }),
    [employeeData, update],
  );

  return (
    <Context.Provider value={contextValue}>
      <RouterProvider router={router}></RouterProvider>
    </Context.Provider>
  );
}

export default App;
