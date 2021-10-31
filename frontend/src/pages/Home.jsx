import SimpleCard from '../components/blocks/SimpleCard'
import Slider from '../components/blocks/Slider'
import '../styles/home.css'
import { Link } from 'react-router-dom'

import {useState , useEffect} from 'react'



const Home = () => {
  
  const [articles,setArticles] = useState([]);

  const fetchArticles = () =>{
    fetch('http://localhost:8080/api/v2/articles').then(
      res=> res.json()).then(
        response => setArticles(response)
      )
    .catch(
      err => console.log(err.message)
    )
  }
  useEffect(() => {
    fetchArticles()
  }, [articles])
  
  //const articles = Data();

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

