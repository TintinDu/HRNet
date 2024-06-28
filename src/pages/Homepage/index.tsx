import styled from "styled-components";
import { Form } from "../../components/Form";
import { Container } from "../../components/Layout/Container";
import { Link } from "../../components/Link";

const HeaderHome = styled.h1``;
const HeaderSecondary = styled.h2``;

export const Homepage = () => {
  return (
    <>
      <Container>
        <HeaderHome>HRnet</HeaderHome>
        <Link path="employees" label="View Current Employees" />
        <HeaderSecondary>Create Employee</HeaderSecondary>
        <Form />
      </Container>
    </>
  );
};
