import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";

// Initial State
const initialState = {
  codes: [
    {
      desc: "Grapes",
      type: "css",
      id: 1,
      codearea: "grapeCode",
    },
    {
      desc: "Melon",
      type: "javascript",
      id: 2,
      codearea: "melonCode",
    },
    {
      desc: "Watermelon",
      type: "python",
      id: 3,
      codearea: "watermaelonCode",
    },
    {
      desc: "Tangerine",
      type: "java",
      id: 4,
      codearea: "tangerineCode",
    },
    {
      desc: "Lemon",
      type: "c#",
      id: 5,
      codearea: "lemonCode",
    },
  ],
  user: { username: "aaquib@gmail.com", password: "password" },
  currentUser: {},
  loggedIn: false,
};

// Create Context
export const GlobalContext = createContext(initialState);

// Provider Componenet
export const StateManager = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  console.log("current state --->", state);

  // Actions
  function deleteCode(id) {
    dispatch({
      type: "DELETE_CODE",
      payload: id,
    });
  }

  function addCode(code) {
    dispatch({
      type: "ADD_CODE",
      payload: code,
    });
  }

  function updateCode(code) {
    dispatch({
      type: "UPDATE_CODE",
      payload: code,
    });
  }

  function findCode(text) {
    dispatch({
      type: "FIND_CODE",
      payload: text,
    });
  }

  function getUser(params) {
    dispatch({
      type: "AUTHENTICATE",
      payload: params,
    });
  }

  useEffect(() => {
    // console.log('password changed')

    function getUser() {

        if(state.user.username == state.currentUser.username && state.user.password == state.currentUser.password){
            console.log('this worked')
            dispatch({
                type: "AUTHENTICATE_USER",
                payload: true,
              });
        }
    }

    getUser();
  }, [state.currentUser, state.loggedIn]);

  return (
    <GlobalContext.Provider
      value={{
        codes: state.codes,
        loggedIn : state.loggedIn,
        deleteCode,
        addCode,
        updateCode,
        findCode,
        getUser,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
