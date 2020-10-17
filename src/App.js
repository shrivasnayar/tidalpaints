import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Main from './components/Main';
import Mission from './components/Mission';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
          <Route exact path='/' component={Main} />
          <Route path="/mission" component={Mission}/>
          <Route path="/contact" component={Contact}/>
      </Router>
    </div>
  );
}

export default App;
