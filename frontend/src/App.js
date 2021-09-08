import './App.css';

import { BrowserRouter as Router ,Switch,Route } from 'react-router-dom';

import Header from './components/header/Header';
import Society from './pages/Society';
import Sport from './pages/Sport';
import Politic from './pages/Politic';
import Home from './pages/Home';
import Article from './pages/Article';




function App() {
  

  return (
    
    <div className="App">
  
      <Router>
        <Header />
        <Switch>
          <Route exact path ='/society' component={Society}></Route>
          <Route exact path ='/politic' component={Politic}></Route>
          <Route exact path ='/sport' component={Sport}></Route>
          <Route exact path ='/article/:id' component={Article}></Route>
          <Route exact path='/' component={Home}></Route>
        </Switch>
     
      </Router>
    </div>
  ) ;
}

export default App;
