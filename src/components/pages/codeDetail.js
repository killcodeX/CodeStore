import React, { useContext, useState, useEffect } from 'react';
import Navbar1 from '../layouts/navbar1';
import { GlobalContext } from '../context/StateManager';
import { Link, useParams } from "react-router-dom";

export default function CodeDetail({ history }) {

    const { id } = useParams();

    const { codes, deleteCode } = useContext(GlobalContext);

    const [newcode, setNewcode ] = useState(null);
    // console.log(newcode)
    

    useEffect(() => {
        const code = codes.find(cod => cod.id === parseInt(id))
        if (code === undefined){
            history.push('/')
        }
        setNewcode(code)
    }, [codes, id])


    return (
        <div>
            <Navbar1/>
            <div className='section'>
                <div className='container'>
                    <div className='box'>
                        {
                            newcode === null ? (
                                <p>Loading...</p>
                            ) : (
                                <>
                        <div className='title'>{newcode.desc}</div>
                        <pre>{newcode.codearea}</pre>
                        <div className='del-edit'>
                            <button className='button is-danger' onClick={() => deleteCode(parseInt(id))}>Delete</button>
                            <Link to={`/code/editcode/${id}`} className='button is-warning'>
                                Edit
                            </Link>
                        </div>
                        </>

                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
