import React from 'react';
import { render } from 'react-dom';
import App from './components/app/App';
import { ModeProvider } from './hooks/DarkMode';

render(
  <ModeProvider>
    <App />
  </ModeProvider>,
  document.getElementById('root')
);
