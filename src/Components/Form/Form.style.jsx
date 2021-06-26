import styled from "styled-components";

const FormDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-left: 6.5rem;
  input {
    margin: 2rem;
    width: 20%;
    border: none;
    border-color: var(--grayborder);
    border-radius: 8px;
    padding: 0.5rem;
    font-size: 1.2rem;
    border: none;
    -webkit-box-shadow: -1px 3px 8px 8px rgba(231, 231, 231, 0.75);
    box-shadow: -1px 3px 8px 4px rgba(216, 213, 213, 0.75);
  }
  select {
    width: 9.2rem;
    border-radius: 8px;
    padding: 0.5rem;
    font-size: 1.2rem;
    margin: 2rem;
    border: none;
    background: var(--white);
    box-shadow: -1px 3px 9px 4px rgba(216, 213, 213, 0.75);
  }
  @media (max-width: 768px) {
    margin: 0 auto;
    input {
      width: 100%;
      margin: 5px;
    }
    select {
      width: 50%;
    }
  }
`;

export default FormDiv;