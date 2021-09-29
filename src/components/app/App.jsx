import React, { useContext } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ModeContext } from '../../hooks/DarkMode';
import ApiContainer from '../ApiContainer';
import Header from '../Header';
import styles from './App.css';

export default function App() {
  const mode = useContext(ModeContext);
  const darkMode = mode.state.darkMode;
  return (
    <BrowserRouter>
      <div data-testid="div"
        className={`${styles.bg} ${darkMode ? styles.bgDark : styles.bgLight}`}
      >
        <Header />

        <Switch>
          <Route path="/" exact component={ApiContainer} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}
//HI
