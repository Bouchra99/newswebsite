import './App.css';

import Header from './components/header/Header';
import Body from './components/body/Body';
import Article from './components/body/article/Article';





function App() {
  

  return (
    
    <div className="App">
      <Header/>
      <Article />
      {/* <Header />
      <Body /> */}
    </div>
  ) ;
}

export default App;
