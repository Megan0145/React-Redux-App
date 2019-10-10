import React from 'react';
import { connect } from 'react-redux';

export function Test({test}) {
    return(
        <div>Test Connected {test}</div>
    );
}

export default connect(state => state, {})(Test);