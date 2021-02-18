import React, { createContext, useContext, useReducer } from 'react';

// Prepare the data layer

export const StateContext = createContext();
export const StateProvider = ({ initialState, reducer, children }) => {
  return (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StateContext.Provider>
  );
};
export const useStateValue = () => {
  return useContext(StateContext);
};
