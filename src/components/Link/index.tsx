import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export const StyledLink = styled.a`
  cursor: pointer;
  margin: 0.5rem;
  padding: 0.5rem;
  border-radius: 5px;
  background-color: #f2f2f2;
  text-decoration: none;
  color: black;
  &:hover {
    background-color: #e2e2e2;
  }
`;

export const Link = ({ path, label }: { path: string; label: string }) => {
  const navigate = useNavigate();
  return (
    <StyledLink
      onClick={() => {
        navigate("/" + path);
      }}
    >
      {label}
    </StyledLink>
  );
};
