import React from 'react';

import Nav from './Nav';


const Main = (props) => {

    return (
        <div>
            <h2>Main Component</h2>
            <Nav />
            {props.children}
        </div>
    )
}

export default Main;