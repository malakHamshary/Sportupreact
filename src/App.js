import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Navigation from './Navigation'
import Header from './Header'
import About from './About'
import Footer from './Footer'
import LandingPage from './LandingPage'




function App() {
  return (
    <BrowserRouter>
            

            <Switch>
            
            <Route path="/" exact component ={LandingPage} />
            <Route path="/home" exact component ={LandingPage} />
            <Route path="/about" component ={About} />
           
            
            </Switch>
           
            
            </BrowserRouter>
  )
}

export default App;
