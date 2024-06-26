import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Route } from "../../routes/router.constants";

export const StyledLink = styled.a`
  color: #007bff;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export const Link = ({ path, label }: { path: Route; label: string }) => {
  const navigate = useNavigate();
  return (
    <StyledLink
      onClick={() => {
        navigate(path);
      }}
    >
      {label}
    </StyledLink>
  );
};
