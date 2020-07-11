import React, { useState, useContext } from 'react';
import Navbar1 from '../layouts/navbar1';
import { GlobalContext } from '../context/StateManager';

export default function AddCode() {

    const { addCode } = useContext(GlobalContext);

    const [desc, setDesc ] = useState('');
    const [codearea, setCodearea ] = useState('');
    const [type, setType ] = useState('');

    const submit = (e) => {
        e.preventDefault();
        // const newCode = {
        //     id : Math.floor(Math.random() * 100000),
        //     desc,
        //     codearea,
        //     type
        // }

        // addCode(newCode);
        console.log(desc,codearea,type)

        setDesc('');
        setCodearea('');
    }


    return (
        <>
            <Navbar1/>
            <div className='section'>
                <div className='container'>
                    <h2 className='title is-2 has-text-centered'>Add Your Code</h2>
                    <div className='box'>
                        <form onSubmit={submit}>
                            <div className='field'>
                                <label className="label">Code Description</label>
                                <div className="control has-icons-left has-icons-right">
                                    <input className="input" type="text" placeholder="Text input" value={desc} onChange={ e => setDesc(e.target.value)}/>
                                    <span className="icon is-small is-left">
                                        <i className="fas fa-terminal"></i>
                                    </span>
                                    <span className="icon is-small is-right">
                                        <i className="fas fa-check"></i>
                                    </span>   
                                </div>
                            </div>
                            <div className='field'>
                                <label className="label">Code Snippet</label>
                                <div className="control has-icons-left has-icons-right">
                                    <input className="textarea" type="text" placeholder="Text input" value={codearea} onChange={e => setCodearea(e.target.value)}/>
                                    <span className="icon is-small is-left">
                                        <i className="fas fa-code"></i>
                                    </span>   
                                </div>
                            </div>
                            <div className="field">
                                <label className="label">Subject</label>
                                <div className="control">
                                    <div className="select">
                                        <select value={type} onChange={e => setType(e.target.value)}>
                                            <option>Select Type</option>
                                            <option value='javascript'>Javascript</option>
                                            <option value='python'>Python</option>
                                            <option value='css'>CSS</option>
                                            <option value='java'>Java</option>
                                            <option value='c#'>C#</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <button className='button is-link sub-btn ' type='submit'>Save Your Code</button>
                        </form>
                    </div>
                </div>
            </div>  
        </>
    )
}
