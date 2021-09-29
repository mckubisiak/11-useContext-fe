import React from 'react';
import { screen, render } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import characterlist from '../fixtures/characterlist.json';
import userEvent from '@testing-library/user-event';

import App from './App';
import { ModeProvider } from '../../hooks/DarkMode';

const mockServer = setupServer(
  rest.get('https://rickandmortyapi.com/api/character/', (req, res, ctx) => {
    return res(ctx.json(characterlist));
  })
);

describe('RickAndMortyApi', () => {
  beforeAll(() => mockServer.listen());
  afterAll(() => mockServer.close());

  it('renders lists of characters', async () => {
    render(
      <ModeProvider>
        <App />
      </ModeProvider>
    );

    screen.getByAltText('loading spinner');

    const button = await screen.getByRole('button', {
      name: 'mode',
    });
    const ul = await screen.findByRole('list', { name: 'characters' });
    const div = screen.getByTestId('div');

    
    expect(ul).toMatchSnapshot();
    
    expect(div).toHaveClass('bg bgDark');
    userEvent.click(button);
    
    expect(div).toHaveClass('bg bgLight');
    
  });
});
