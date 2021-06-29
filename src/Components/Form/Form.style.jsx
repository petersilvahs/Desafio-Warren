import styled from "styled-components";

const FormDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-left: 40rem;
  input {
    margin: 1rem;
    width: 20%;
    border: none;
    border-radius: 8px;
    padding: 0.5rem;
    font-size: 1.2rem;
    border: none;
    -webkit-box-shadow: -1px 3px 8px 8px rgba(231, 231, 231, 0.75);
    box-shadow: -1px 3px 8px 4px rgb(170, 167, 167);
  }
  select {
    width: 9.2rem;
    border-radius: 8px;
    padding: 0.5rem;
    font-size: 1.2rem;
    margin: 2rem;
    border: none;
    background: var(--white);
    box-shadow: -1px 3px 9px 4px rgb(170, 167, 167);
  }
  @media (max-width: 768px) {
    margin: 0 auto;
    input {
      width: 100%;
      margin: 8px;
    }
    select {
      width: 40%;
    }
  }
`;

export default FormDiv;