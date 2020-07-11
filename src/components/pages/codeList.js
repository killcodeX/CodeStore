import React, { useContext } from 'react';
import Code from './code';
import { GlobalContext } from '../context/StateManager';



export default function CodeList() {

    const context = useContext(GlobalContext);

    console.log(context);
    
    return (
        <>
          <Code/> 
        </>
    )
}

