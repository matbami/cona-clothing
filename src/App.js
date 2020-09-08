import React from 'react';
import { Switch, Route } from 'react-router-dom'

import './App.css';
import Homepage from './pages/homepage/homepage.componenet'

const Hatpage = () => (
  <div>
    <h1>Fresh</h1>
  </div>
)

function App() {
  return (
    <div>
      <Switch>

        <Route exact path='/' component={Homepage} />
        <Route exact path='/hat' component={Hatpage} />

      </Switch>

    </div>
  );
}

export default App;
