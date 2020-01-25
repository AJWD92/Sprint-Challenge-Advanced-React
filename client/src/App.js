import React from 'react';
import PlayerComponent from './components/PlayerComponent';
import { useDarkMode } from './hooks/useDarkMode';
import Chart from './components/Chart';
import './App.css';

function App() {
  const [darkMode, setDarkMode] =useDarkMode('dark')

  const toggleDarkMode = e =>  {
    e.preventDefault();
    setDarkMode(!darkMode)
  };

  return (
    <div className="App">
      <button onClick={toggleDarkMode}
      className={darkMode ? 'toggled on' : 'toggled off'}>Dark Mode</button>
      <h1>Pie Chart of seraches per player.</h1>
      <Chart/>
      <h1>Women's World Cup!!!!! Goal!!!!!!</h1>
      <PlayerComponent/>
    </div>
  );
}

export default App;
