import { createContext } from "react";
import { MockedData, mockedData } from "../__mocks";

export const EmployeeContext = createContext({
  data: mockedData,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  update: (_data: MockedData) => {
    return;
  },
});
