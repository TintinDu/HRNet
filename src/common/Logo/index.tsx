import { Link } from "react-router-dom";
import styled from "styled-components";
import { routes } from "../../routes/router.constants";

const StyledH1 = styled.h1`
  font-size: 2rem;
  color: #007bff;
  margin: 0;
  padding: 0;
  font-weight: bold;
  font-family: Arial, sans-serif;
  text-align: center;
  margin-top: 1rem;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

export const Logo = () => {
  return (
    <StyledLink to={routes.HOME}>
      <StyledH1>HRnet</StyledH1>
    </StyledLink>
  );
};
