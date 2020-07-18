import React, { useContext } from 'react';
import Code from './code';
import { GlobalContext } from '../context/StateManager';



export default function CodeList() {

    const { codes } = useContext(GlobalContext);
    
    return (
        <>
          { codes.map((code,i) => (
            <Code desc={code.desc} type={code.type} id={code.id} key={i}/>
          ))} 
        </>
    )
}

