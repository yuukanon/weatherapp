import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Contact from './components/Contact';
import { Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/contact' component={Contact} />
      </Switch>
    </>
  );
}

export default App;
