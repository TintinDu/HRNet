import styled from "styled-components";

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-bottom: 1rem;
  label {
    font-weight: bold;
  }
  input {
    padding: 5px;
    font-size: 1.2rem;
  }
`;

export const InputRemember = styled.div`
  display: flex;
`;

export const CustomLabel = styled.label`
  margin-left: 0.25rem;
`;

export const SignInButton = styled.button`
  display: block;
  width: 100%;
  padding: 8px;
  font-size: 1.1rem;
  font-weight: bold;
  margin-top: 1rem;
  border-color: #00bc77;
  background-color: #00bc77;
  color: #fff;
  text-decoration: underline;
  border: none;
`;

export const StyledForm = styled.form`
  box-sizing: border-box;
  background-color: white;
  margin: 0 auto;
  text-align: center;
`;
