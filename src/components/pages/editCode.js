import React, { useState, useContext,useEffect } from 'react';
import { GlobalContext } from '../context/StateManager';
import { useParams } from "react-router-dom";

export default function EditCode(props) {

    const { id } = useParams();

    const { updateCode,codes } = useContext(GlobalContext);

    const [desc, setDesc ] = useState('');
    const [codearea, setCodearea ] = useState('');
    const [type, setType ] = useState('');

    const [newcode, setNewcode] = useState(codes);

    const submit = (e) => {
        e.preventDefault();
        const newCd = {
            id,
            desc,
            codearea,
            type
        }

        updateCode(newCd)
        props.history.push(`/code/${id}`)
    }

    useEffect(() => {
        const code = newcode.find(cod => cod.id == id)
        setDesc(code.desc)
        setCodearea(code.codearea)
        setType(code.type)
    }, [])

    return (
        <>
            <div className='section'>
                <div className='container'>
                    <h2 className='title is-2 has-text-centered'>Edit Your Code</h2>
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
                                    <textarea className="textarea" type="text" placeholder="Update Code here..." value={codearea} onChange={e => setCodearea(e.target.value)}/>  
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
