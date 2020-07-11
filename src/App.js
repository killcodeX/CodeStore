import React from 'react';
import './App.css';
import Home from './components/pages/home';
import { StateManager } from './components/context/StateManager';
import AddCode from './components/pages/addCode'; 
import {
  BrowserRouter as Router,
  Switch,
  Route,
  BrowserRouter
} from "react-router-dom";


function App() {
  return (
    <StateManager>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/addcode' component={AddCode}/>
        </Switch>
      </BrowserRouter>
    </StateManager>
  );
}

export default App;
