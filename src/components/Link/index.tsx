import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Route } from "../../routes/router.constants";

const StyledLink = styled.a`
  color: #007bff;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

interface CustomLinkProps {
  path: Route;
  label: string;
}

export const Link: React.FC<CustomLinkProps> = ({ path, label }) => {
  const navigate = useNavigate();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate(path);
  };

  return (
    <StyledLink onClick={handleClick} href={path}>
      {label}
    </StyledLink>
  );
};
