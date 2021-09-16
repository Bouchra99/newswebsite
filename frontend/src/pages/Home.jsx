import SimpleCard from '../components/blocks/SimpleCard'
import './home.css'
import { Link } from 'react-router-dom'
import Data from '../data/data'




const Home = () => {
  
  const articles = Data();
 
    
  if(typeof articles!=='undefined'){
      var blocks = articles.map(a => 
      <Link  key ={a.id} className="Link" to={`/article/${a.id}`}>
        <SimpleCard article ={a} />
      </Link>
      ) 
  }
    return ( 
        
        <div className="body">
          {blocks}
       </div>  ) 
    }
  


export default Home

