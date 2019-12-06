import React from 'react';
import { render } from '@testing-library/react';
import App from './App.js';

test('App renders without crashing', () => {
  render(<App/>);
});

test('both scoreboards are rendered', () => {
  const { getByTestId} = render(<App />);

  getByTestId(/player-card/i);
  getByTestId(/player-country/i);
  getByTestId(/player-name/i);
})

test('down display is rendered', () => {
  const { getByText } = render(<App />);

  getByText('Down');
})