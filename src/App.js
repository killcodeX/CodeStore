import React from 'react';
import './App.css';
import Home from './components/pages/home';
import { StateManager } from './components/context/StateManager';

function App() {
  return (
    <StateManager>
      <Home/>
    </StateManager>
  );
}

export default App;
