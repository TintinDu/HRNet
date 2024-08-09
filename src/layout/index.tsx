import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Layout/Navbar";
import styled from "styled-components";
import { Container } from "../components/Layout/Container";

export const BasicMain = styled.main`
  background-color: #12002b;
  flex: 1;
`;

function Layout() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Container>
          <Outlet />
        </Container>
      </main>
    </div>
  );
}

export default Layout;
