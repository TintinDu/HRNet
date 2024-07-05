import { createContext } from "react";
import { MockedData, mockedData } from "../__mocks";

export const Context = createContext({
  data: mockedData,
  setData: (newData: MockedData) => newData,
});
