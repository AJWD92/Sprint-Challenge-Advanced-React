import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders without crashing', () => {
  render(<App />, div);
});

test('The player name, and country are rendered as well as the data card container is rendered', () => {
  const { getByTestID } = render(<App />);

  getByTestID(/player-name/i)
  getByTestID(/player-country/i)
  getByTestID(/player-card/i)
  
})

