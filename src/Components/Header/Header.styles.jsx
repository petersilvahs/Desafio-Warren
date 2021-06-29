import styled from "styled-components";

export const DivHeader = styled.div`
    grid-area: footer;
  background-color: var(--red);
  display: flex;
  bottom: 0;
  padding: 1em;
  align-items: center;
  text-decoration: none;
  justify-items: center;
  border-top: 1px solid #e04257;
  
  .divB button{
    margin-top: 3px;
    margin-left: 95rem;
    display:inline-block;
 padding:0.3em 1.2em;
 border-radius:2em;
 box-sizing: border-box;
 text-decoration:none;
 font-weight:300;
 color:#FFFFFF;
 background-color: #3a3941;
 text-align:center;
 transition: all 0.2s;
  }
  .divB button:hover{
 background-color: black;
}

  @media (max-width: 750px){
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 200px;
    div{
      text-align: center;
      width: 100%;
    }
    img{
      width: auto;
      margin: auto;
    }
    button{
      position: absolute;
        top: 0;
        right: 0;
    }
  }
`;