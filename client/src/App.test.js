import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import * as rtl from '@testing-library/react';

import PlayerCard from './components/PlayerCard';
import PlayerComponent from './components/PlayerComponent';
import App from './App.js';


test('App renders without crashing', () => {
  const wrapper = rtl.render(<App/>);
  const appText = wrapper.queryByText(/women's world cup!!!!! goal!!!!!!/i);
  expect(appText).toBeInTheDocument();
});

test('both player info is being rendered', () => {
  const wrapper = rtl.render(<PlayerCard/>);
  
  const country = wrapper.getByTestId(/player-country/i);
  const playerName = wrapper.getByTestId(/player-name/i);
  expect(country).toBeInTheDocument();
  expect(playerName).toBeInTheDocument();
}
)
test('player card is being rendered', () => {
  const wrapper = rtl.render(<PlayerComponent/>);
 const card = wrapper.getByTestId(/player-card/i);
 expect(card).toBeInTheDocument();
})

