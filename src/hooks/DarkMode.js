import React, { createContext, useReducer } from 'react';

export const ModeContext = createContext();

const initialState = {
  darkMode: true,
};

const modeReducer = (state, action) => {
  switch (action.type) {
    case 'LIGHTMODE':
      return { darkMode: false };
    case 'DARKMODE':
      return { darkMode: true };
    default:
      return state;
  }
};

export function ModeProvider(props) {
  const [state, dispatch] = useReducer(modeReducer, initialState);

  return (
    <ModeContext.Provider value={{ state, dispatch }}>
      {props.children}
    </ModeContext.Provider>
  );
}
