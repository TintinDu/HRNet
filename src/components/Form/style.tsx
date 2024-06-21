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

export const CustomInput = styled.input`
  padding: 0.5rem;
  font-size: 1.2rem;
  margin-top: 0.25rem;
  border: 1px solid #ced4da;
  border-radius: 5px;
  width: 100%;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  background-color: white;
  margin: 0 auto;
  text-align: center;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 50%;
  max-width: 500px;
  label {
    font-weight: bold;
  }
`;

export const SubmitButton = styled.button`
  padding: 0.5rem 1rem;
  font-size: 1.2rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 1rem;
  &:hover {
    background-color: #0056b3;
  }
`;

export const FieldSet = styled.fieldset`
  border: 1px solid #ced4da;
  border-radius: 5px;
  padding: 1rem;
  margin-top: 1rem;
  legend {
    font-weight: bold;
  }
`;
