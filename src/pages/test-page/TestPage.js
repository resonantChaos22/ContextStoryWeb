import React from 'react';
import { Link } from 'react-router-dom';

import TestGreet from '../../components/test-greeting/TestGreet';

export default () => {
    return (
        <div style={{textAlign: 'center'}}>
            <TestGreet />
            <br />
            <Link to='/'>
                <button className="ui massive grey button">Back and Forth(kafi sahi gaana hai)</button>
            </Link>
        </div>
    );
};