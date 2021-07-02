import React from 'react';
import { Switch, Route } from "react-router-dom";
import Login from '../Login/Login.jsx';
import Register from '../Register/Register.jsx';
import CreateWorkspace from '../CreateWorkspace/CreateWorkspace.jsx';
import Workspace from '../Workspace/Workspace.jsx';
import './App.css';

function App() {
  return (
    <Switch>
      <Route exact path='/'>
        <Workspace />
      </Route>
      {/*  */}
      <Route path='/dialog'>
        <Workspace />
      </Route>
      <Route path='/group-chat'>
        <Workspace />
      </Route>
      <Route path='/contacts'>
        <Workspace />
      </Route>
      {/*  */}
      <Route path='/signup'>
        <Workspace />
      </Route>
      <Route path='/signin'>
        <Login />
      </Route>
      <Route path='/signup'>
        <Register />
      </Route>
      <Route path='/create-workspace'>
        <CreateWorkspace />
      </Route>
    </Switch>
  );
}

export default App;
