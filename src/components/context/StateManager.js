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
          },
          {
            "desc": "Banana", "type": "css", "id": 6
          },
          {
            "desc": "Pineapple", "type": "python", "id": 7
          },
          {
            "desc": "Mango", "type": "javascript","id": 8
          },
          { 
            "desc": "Red", "type": "java", "id": 9 
          },
          {
            "desc": "Green", "type": "c#", "id": 10
          },
          {
            "desc": "Pear", "type": "css", "id": 11
          },
          {
            "desc": "Peach", "type": "javascript", "id": 12
          },
          {
            "desc": "Cherries", "type": "python", "id": 13
          },
          {
            "desc": "Strawberry", "type": "java", "id": 14
          },
          {
            "desc": "Kiwi", "type": "c#", "id": 15
          },
          
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
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }

    function addCode(transaction){
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
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