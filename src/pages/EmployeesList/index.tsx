import styled from "styled-components";
import { Form } from "../../components/Form";

const HeaderEmployeesList = styled.h2``;

export const EmployeesList = () => {
  return (
    <>
      <HeaderEmployeesList>Create Employee</HeaderEmployeesList>
      <Form />
    </>
  );
};
