import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Layout/Navbar";
import styled from "styled-components";

export const BasicMain = styled.main`
  background-color: #12002b;
  flex: 1;
`;

export function Layout() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
