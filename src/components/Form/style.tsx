import styled from "styled-components";

export const CustomerLabel = styled.label`
  font-weight: bold;
  font-size: 1rem;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.75rem;
  margin: 0.25rem 0;
`;

export const CustomInput = styled.input`
  padding: 0.5rem 0;
  font-size: 0.9rem;
  border: 1px solid #ced4da;
  border-radius: 5px;
  width: 90%;
  text-align: center;
  display: flex;
  align-self: center;
`;

export const CustomSmallLabel = styled.label`
  font-size: 0.8rem;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  background-color: white;
  margin: 0 auto;
  text-align: center;
  padding: 0.75rem;
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
  font-size: 1rem;
  background-color: #007bff;
  color: white;
  border: none;
  margin: auto;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 0.5rem;
  text-align: center;
  width: 90%;
  &:hover {
    background-color: #0056b3;
  }
`;

export const FieldSet = styled.fieldset`
  border: 1px solid #ced4da;
  border-radius: 5px;
  padding: 0.25rem;
  margin-top: 0.25rem;
  legend {
    font-weight: bold;
  }
`;

export const CustomLegend = styled.legend`
  font-weight: bold;
`;
