import React, { createContext, useContext, useReducer } from "react"

//prepares the datalayer
export const StateContext = createContext();

// Map our app and provide the data layaer

export const StateProvider = ({reducer,initialState,children}) => (
    <StateContext.Provider value={useReducer(reducer,initialState)}>
        {children}
    </StateContext.Provider>
);

//pull information from the data layer
export const useStateValue = () => useContext(StateContext)


