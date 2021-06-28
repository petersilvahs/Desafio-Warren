import styled from "styled-components";

export const DivHome = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: space-evenly;
  align-items: center;
  padding: 3rem 0;
  
  @media (max-width: 750px){
    flex-direction: column;
    div{
      text-align: center;
      width: 100%;
    }
  }`