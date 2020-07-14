import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Initial State
const initialState = {
    codes : [
        {
            "desc": "Grapes", "type": "css", "id": 1, "codearea": 'grapeCode'
          },
          {
            "desc": "Melon", "type": "javascript", "id": 2, "codearea": 'melonCode'
          },
          {
            "desc": "Watermelon", "type": "python", "id": 3, "codearea": 'watermaelonCode'
          },
          {
            "desc": "Tangerine", "type": "java", "id": 4, "codearea": 'tangerineCode'
          },
          {
            "desc": "Lemon", "type": "c#", "id": 5, "codearea": 'lemonCode'
          } 
    ]
}  

// Create Context
export const GlobalContext = createContext(initialState);


// Provider Componenet
export const StateManager = ({ children }) => {
    const [state, dispatch ] = useReducer(AppReducer, initialState);

    // Actions 
    function deleteCode(id){
        dispatch({
            type: 'DELETE_CODE',
            payload: id
        });
    }

    function addCode(code){
        dispatch({
            type: 'ADD_CODE',
            payload: code
        });
    }

    function updateCode(code){
        dispatch({
            type: 'UPDATE_CODE',
            payload: code
        });
    }

    return(
        <GlobalContext.Provider value={{ 
            codes : state.codes,
            deleteCode,
            addCode,
            updateCode
        }}>
            { children }
        </GlobalContext.Provider>
    )
}