import styled from "styled-components";

const Section = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .progress {
    background-color: var(--gray);
    border-radius: 20px;
    position: relative;
    margin: 15px 0;
    height: 30px;
    width: 25rem;
  }
  .progress-done {
    background: linear-gradient(to left, var(--red), var(--orange));
    box-shadow: 0 3px 3px -5px var(--red), 0 2px 5px var(--red);
    border-radius: 20px;
    color: var(--white);
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 0;
    opacity: 0;
    transition: 1s ease 0.3s;
  }
  .progress-done p {
    color: transparent;
  }
  .statusText {
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    margin: 0 auto;
  }
  .statusText h4 {
    margin: 0.5rem auto 1.8rem;
    text-align: justify;
  }
  @media (max-width: 768px) {
    .progress {
      width: 90%;
    }
    .status {
      width: 100%;
    }
  }
`;
export default Section;