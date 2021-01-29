import React from 'react';
import './Scroll.css'

let Scroll = (props) => {
    return (
        <div className='scroll'>
            {props.children}
        </div>
    );
};

export default Scroll;