import './App.css';

import { BrowserRouter ,Switch,Route } from 'react-router-dom';
import Header from './components/header/Header';

import Society from './pages/Society';
import Sport from './pages/Sport';
import Politic from './pages/Politic';
import Home from './pages/Home';
import Article from './pages/Article';




function App() {
  

  return (
    
    <div className="App">
  
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path ='/society' component={Society}></Route>
          <Route exact path ='/politic' component={Politic}></Route>
          <Route exact path ='/sport' component={Sport}></Route>
          <Route exact path ='/article/id=0' component={Article}></Route>
          <Route exact path='/' component={Home}></Route>
        </Switch>
       
      </BrowserRouter>
    </div>
  ) ;
}

export default App;
