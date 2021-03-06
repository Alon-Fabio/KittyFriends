import React from 'react';


const Scroll = (props) => {

    return(

        <div
            style=
                {{overflowY: 'scroll',
                border: '1px solid black',
                height: '70vh',
                margin:'10px',
                padding:'10px',
                borderRadius:'10px',
                }}>
            {props.children}
        </div>

    );
}

export default Scroll;