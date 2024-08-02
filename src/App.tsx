import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";
import { EmployeeContext } from "./contexts";
import { useContext, useState, useMemo, useCallback } from "react";
import { MockedData } from "./__mocks";

function App() {
  const { data } = useContext(EmployeeContext);
  // localStorage.setItem("employeeData", JSON.stringify(data));
  const [employeeData, setEmployeeData] = useState(data);

  const update = useCallback((data: MockedData) => setEmployeeData(data), []);

  const contextValue = useMemo(
    () => ({ data: employeeData, update }),
    [employeeData, update],
  );

  return (
    <EmployeeContext.Provider value={contextValue}>
      <RouterProvider router={router}></RouterProvider>
    </EmployeeContext.Provider>
  );
}

export default App;
