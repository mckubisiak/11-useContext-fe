import React, { useContext } from 'react';
import { ModeContext } from '../hooks/DarkMode';

export default function Header() {
  const mode = useContext(ModeContext);
  const darkMode = mode.state.darkMode;

  const changeMode = () => {
    if (darkMode) {
      mode.dispatch({ type: 'LIGHTMODE' });
    } else {
      mode.dispatch({ type: 'DARKMODE' });
    }
  };

  return (
    <>
      <button aria-label="mode" onClick={changeMode}>
        {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </button>
    </>
  );
}
