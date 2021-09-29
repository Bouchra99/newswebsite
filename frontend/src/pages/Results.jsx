
import '../styles/search.css'
import { useState,useEffect } from "react";
import Data from '../data/data'
import { Link } from 'react-router-dom';

const Results = ({match}) => {
    const data = Data()
    const search = match.params.search ;   
    const [val, setval] = useState(0)
    const [result,setResult] = useState(['searching .. ']);
     
  
    const searching=()=>{
        if(data!==undefined){ 
            const res = data.map(item=>{return item}).filter(
                    item => item.title.toLowerCase().includes(search.toLowerCase()))
            setResult(res);
        }else{
            setval(val+1)
        }
    }
    
    useEffect(()=>{    
        searching()

    },[val ,search])
  
   
    return (
        <div className="results-container">
          <h2>Results for "{search}"</h2>
        
          { result.length==0 ? <p>No results to show</p> :
           result.map(item=>
               
                  <Link to={`/article/${item.id}`} key={item.id}>
                      <div className="result"><b>{item.title}</b></div>
                  </Link>  

           )} 
        </div>
    )
}

export default Results
