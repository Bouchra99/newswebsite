import {FaSistrix} from 'react-icons/fa'
import {useState} from 'react'
import { Link } from 'react-router-dom'
// import './Header.css'


const Search = () => {

    
    const [search, setSearch] = useState('')
  
   

    const searching =()=>{
        console.log("search clicked")
        setSearch('')
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
            
           <Link to={`/search/${search}` } >
               <button onClick={searching} ><FaSistrix size={20} /></button>
            </Link>
            
        </div>
    )
}

export default Search
