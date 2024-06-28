import { Link } from "react-router-dom";
import styled from "styled-components";

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

export const Logo = () => {
  return (
    <Link to="/">
      <StyledH1>HRnet</StyledH1>
    </Link>
  );
};
