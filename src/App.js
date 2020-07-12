import React from 'react';
import './App.css';
import Home from './components/pages/home';
import { StateManager } from './components/context/StateManager';
import AddCode from './components/pages/addCode';
import CodeDetail from './components/pages/codeDetail';
import Login from './components/pages/login';  
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
          <Route exact path='/code/:id' component={CodeDetail}/>
          <Route exact path='/login' component={Login}/>
        </Switch>
      </BrowserRouter>
    </StateManager>
  );
}

export default App;
