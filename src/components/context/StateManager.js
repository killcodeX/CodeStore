import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Initial State
const initialState = {
    codes : [
        {
            "desc": "Grapes", "type": "css", "id": 1
          },
          {
            "desc": "Melon", "type": "javascript", "id": 2
          },
          {
            "desc": "Watermelon", "type": "python", "id": 3
          },
          {
            "desc": "Tangerine", "type": "java", "id": 4
          },
          {
            "desc": "Lemon", "type": "c#", "id": 5
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

    return(
        <GlobalContext.Provider value={{ 
            codes : state.codes,
            deleteCode,
            addCode
        }}>
            { children }
        </GlobalContext.Provider>
    )
}