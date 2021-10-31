import './styles/header.css' 
import './App.css' 

import { BrowserRouter as Router ,Switch,Route } from 'react-router-dom';

import Header from './components/header/Header';
import Society from './pages/Society';
import Sport from './pages/Sport';
import Politic from './pages/Politic';
import Home from './pages/Home';
import Article from './pages/Article';
import Admin from './pages/Admin';
import Login from './pages/login';
import Results from './pages/Results';
import { useState } from 'react';
import {VscColorMode} from "react-icons/vsc"




function App() { 

  const[darkMode,setDarkMode]=useState(true);
  
  const storedMode = localStorage.getItem('mode') 
  

  
  return (
    <div className={ storedMode === "true" ? "App dark-mode":"App light-mode"}>
     
      <Router>
        <Header />
        <div className ='mode'>
          <button onClick={()=>{
             setDarkMode(!darkMode); 
             localStorage.setItem('mode',darkMode)
            } }><VscColorMode size={28}/></button>
        </div>
        <Switch>
          <Route axact path ='/admin' component={Admin}></Route>
          <Route axact path ='/login' component={Login}></Route>
          <Route exact path ='/society' component={Society}></Route>
          <Route exact path ='/politic' component={Politic}></Route>
          <Route exact path ='/sport' component={Sport}></Route>
          <Route exact path ='/article/:id' component={Article}></Route>
          <Route exact path ='/search/:search' component={Results}></Route>
          <Route exact path='/' component={Home}></Route>
        </Switch>
     
      </Router>
    </div>
  ) ;
}

export default App;
