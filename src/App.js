import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import Contact from './Pages/Home/Contact/Contact';
import Footer from './Pages/Home/Footer/Footer';
import Home from './Pages/Home/Home/Home';
import ProjectDetails from './Pages/Home/ProjectDetails/ProjectDetails';
import Projects from './Pages/Projects/Projects';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/home'>
          <Home />
        </Route>
        <Route path='/projects'>
          <Projects />
        </Route>
        <Route path='/contact'>
          <Contact />
        </Route>
        <Route path='/details/:pid'>
          <ProjectDetails />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
