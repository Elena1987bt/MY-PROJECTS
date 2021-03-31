import { useContext, createContext, useReducer } from 'react';
export const StateContext = createContext();

export const StateProvider = ({ children, initialValue, reducer }) => {
  // const [state, dispatch] = useReducer(reducer, initialValue);
  // console.log(state);
  return (
    <StateContext.Provider value={useReducer(reducer, initialValue)}>
      {children}
    </StateContext.Provider>
  );
};

// pull info from the data layer
export const useStateValue = () => useContext(StateContext);
