import React from 'react';
import Errorimg from '../images/404.svg';

export default function Errorpage() {

    const mystyle = {
        width: "700px",
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,50%)'
      };

    return (
        <div>
            <div className='container'>
                <img style={mystyle}src={Errorimg} alt='error page' />
            </div>
        </div>
    )
}


