import styled from "styled-components";
import { Form } from "../../components/Form";
import { Container } from "../../components/Layout/Container";

const HeaderEmployeesList = styled.h2``;

export const EmployeesList = () => {
  return (
    <>
      <Container>
        <HeaderEmployeesList>Create Employee</HeaderEmployeesList>
        <Form />
      </Container>
    </>
  );
};
