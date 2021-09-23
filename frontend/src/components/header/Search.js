import {FaSistrix} from 'react-icons/fa'
import {useState} from 'react'
import { Link } from 'react-router-dom'
import Data from '../../data/data'


const Search = () => {

    const data = Data();
    const [search, setSearch] = useState('')
    const [result,setResult] = useState([]);
   

    const searching =()=>{
        console.log("search clicked")
        console.log(data);
        
        const res = data.map(item=>{return item.title}).filter(title => title.toLowerCase().includes(search.toLowerCase()));
        setResult(res);
        
        
    }

    return (
        <div className="searchinput">
             
            <input 
                type ='text' 
                placeholder ='search..'
                value = {search}
                onChange = {(e)=>setSearch(e.target.value)}
            >   
            </input>
           <Link to={`/search` } ><button onClick={searching} ><FaSistrix /></button></Link>
            
        </div>
    )
}

export default Search
