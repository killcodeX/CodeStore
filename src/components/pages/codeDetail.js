import React, { useContext, useState, useEffect } from 'react';
import Navbar1 from '../layouts/navbar1';
import { GlobalContext } from '../context/StateManager';
import { Link, useParams } from "react-router-dom";

export default function CodeDetail(props) {

    const { id } = useParams();

    const { codes } = useContext(GlobalContext);

    const [newcode, setNewcode ] = useState(codes);
    console.log(newcode)

    useEffect(() => {
        
        const code = newcode.find( cd => cd.id == id)
        setNewcode(code)
    }, [])

    const { deleteCode } = useContext(GlobalContext);

    return (
        <div>
            <Navbar1/>
            <div className='section'>
                <div className='container'>
                    <div className='box'>
                        <div className='title'>{newcode.desc}</div>
                        <pre>{newcode.codearea}</pre>
                        <div className='del-edit'>
                            <div className='button is-danger' onClick={deleteCode}>Delete</div>
                            <div className='button is-warning'>Edit</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
