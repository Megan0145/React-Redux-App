import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../state/actionCreators";
import styled from 'styled-components';
// font-family: 'Shadows Into Light', cursive;
// font-family: 'Amatic SC', cursive;
// font-family: 'Shadows Into Light Two', cursive;

const StyledYe = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 100vw;
  text-align: center;
  
  img{
    width: 100%;
    position: fixed;
    bottom: 0;
  } 
  p {
    color: #89A0DE;
    font-size: 2rem;
    font-family: 'Shadows Into Light Two', cursive;
    width: 70%;
  }
  button {
   position: fixed;
   margin-top: 32vh;
    z-index: 1;
    height: 3rem;
    width: 50vw;
    border-radius: 10px;
    background-color: rgba(130,229,130, 0.8);
    border: none;
    font-size: 1.8rem;
    color: white;
  }
`;

export function Quote({ getKanyeQuote, quote }) {
  debugger;
  useEffect(() => {
    getKanyeQuote();
  }, []);

  return (
    <StyledYe>
      <p>{quote.quote}</p>
      <button onClick={getKanyeQuote}> QUOTE ME</button>
      <img src="ye.jpg" />
    </StyledYe>
  );
}

export default connect(
  state => state,
  actionCreators
)(Quote);
