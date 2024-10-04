import React from 'react'
import './index.css';
import Navbar from './component/Navbar';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NotesState from './context/NotesState'
import Home from './component/Home';
import About from './component/About';
import Login from './component/Login';
import SignUp from './component/SignUp';

function App() {
  return (
      <>
          <NotesState>
          <Router>
              <Navbar /> 
              <Switch>
                  <Route exact path="/"> <Home /> </Route>
                  <Route exact path="/about"> <About /> </Route>
                  <Route exact path="/login"> <Login /> </Route>
                   <Route exact path="/signup"> <SignUp/> </Route>     
              </Switch>
          </Router>
         </NotesState>
          
    </>
  )
}

export default App