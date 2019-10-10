import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../state/actionCreators";

export function Quote({ getKanyeQuote, quote }) {
  debugger
  useEffect(() => {
    
    getKanyeQuote();
  }, []);

  return (
    <div>
     <p>{quote.loading}</p>
      
    </div>
  );
}

export default connect(
  state => state,
  actionCreators
)(Quote);
