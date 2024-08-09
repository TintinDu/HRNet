import styled from "styled-components";

const StyledLabel = styled.label`
  font-weight: bold;
  font-size: 1rem;
  margin: 0.5rem 0;
`;

interface CustomLabelProps {
  htmlFor?: string;
  children: React.ReactNode;
}

const CustomLabel: React.FC<CustomLabelProps> = ({ htmlFor, children }) => {
  return <StyledLabel htmlFor={htmlFor}>{children}</StyledLabel>;
};

export default CustomLabel;
