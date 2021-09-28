import SimpleCard from '../components/blocks/SimpleCard'
import Slider from '../components/blocks/Slider'
import '../styles/home.css'
import { Link } from 'react-router-dom'
import Data from '../data/data'




const Home = () => {
  
  const articles = Data();

  if(typeof articles!=='undefined'){
      var blocks = articles.filter(a=>articles.indexOf(a)<articles.length - 3).reverse().map(a => 
        <Link  key ={a.id} className="Link" to={`/article/${a.id}`}>
          <SimpleCard article ={a} />
        </Link>
      ) 
  }
 

    return ( 
        <>
        <Slider/> 
        <br/><br/>
        <div className="body">
          {blocks}
       </div>
       </>  ) 
    }
  


export default Home

