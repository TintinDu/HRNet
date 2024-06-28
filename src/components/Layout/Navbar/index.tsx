import styled from "styled-components";
import { Logo } from "../../../common/Logo";
import { Link } from "../../Link";
import { routes } from "../../../routes/router.constants";

const StyledNavbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px;
`;

export function Navbar() {
  return (
    <StyledNavbar>
      <Logo />
      <Link path={routes.EMPLOYEES} label="View Current Employees" />
    </StyledNavbar>
  );
}
