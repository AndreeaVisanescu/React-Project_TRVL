import './App.css';
import NavBar from "./components/NavBar";
import Home from './components/pages/Home';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import React from 'react';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';

function App() {
  return (
    <div className='app-container'>
      <Router>
        <NavBar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/home' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/products' component={Products} />
          <Route path='/sign-up' component={SignUp} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;