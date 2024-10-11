import styled from "styled-components";
import Form from "../../components/Form";

const HeaderSecondary = styled.h2`
  font-size: 1.3rem;
  margin: 0;
  padding: 0;
  font-weight: bold;
  text-align: center;
  margin-bottom: 0.5rem;
`;

function Homepage() {
  return (
    <>
      <HeaderSecondary>Create Employee</HeaderSecondary>
      <Form />
    </>
  );
}

export default Homepage;
