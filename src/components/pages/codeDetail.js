import React from 'react';
import Navbar1 from '../layouts/navbar1';

export default function codeDetail() {
    return (
        <div>
            <Navbar1/>
            <div className='section'>
                <div className='container'>
                    <div className='box'>
                        <div className='title'>Grapes</div>
                        <code>
                            font-family: Consolas,"courier new";
                            color: crimson;
                            background-color: #f1f1f1;
                            padding: 2px;
                            font-size: 105%;
                        </code>
                        <div className='del-edit'>
                            <div className='button is-danger'>Delete</div>
                            <div className='button is-warning'>Edit</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
