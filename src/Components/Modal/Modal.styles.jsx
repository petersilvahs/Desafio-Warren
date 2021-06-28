import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  section {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    margin-top: 1rem;
  }
  h1 {
    margin: 0 auto;
    padding-left: 2.2rem;
    text-align: center;
  }
  h2,
  p {
    margin: 1rem 0 0 3.8rem;
    text-align: left;
  }
  div hr {
    border: 1px solid black;
    width: 80%;
    margin-left: 3.7rem;
  }
  .container {
    width: 40%;
    background-color: var(--white);
    height: 25rem;
    border-radius: 20px;
    -webkit-box-shadow: 5px 5px 15px 5px #000000;
    box-shadow: 5px 5px 15px 5px #000000;
    animation: modal 0.3s;
  }
  .button {
    display: flex;
    align-items: flex-start;
    justify-content: flex-end;
    padding: 0.5rem;
  }
  .button button {
    background: transparent;
    border: none;
    top: 0;
    right: 0;
  }
  @keyframes modal {
    from {
      opacity: 0;
      transform: translate3d(0, -60px, 0);
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
  @media (max-width: 768px) {
    .container {
      width: 96%;
    }
    h2,
    p {
      margin: 0.5rem 2.5rem;
    }
    div hr {
      margin-left: 2.4rem;
    }
  }
`;
export default Container;