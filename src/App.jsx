import React from 'react'
import './index.css';
import Navbar from './component/Navbar';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './component/Home';
import About from './component/About';

function App() {
  return (
      <>
          <Router>
              <Navbar /> 
              <Switch>
                  <Route exact path="/"> <Home /> </Route>
                  <Route exact path="/about"> <About/> </Route>
              </Switch>
          </Router>
         
          
    </>
  )
}

export default App