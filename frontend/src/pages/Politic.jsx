import '../styles/categories.css'
import CategoryBlock from '../components/blocks/CategoryBlock'
import Data from '../data/data'
import { Link } from 'react-router-dom'


const Politic = () => {

    var articles = Data()
   
    if(typeof articles!=='undefined'){
        var blocks = articles.filter(a=>a.category =='Politic').
        map(a => <Link key={a.id} className="Link" to={`/article/${a.id}`}>
            <CategoryBlock  article ={a}/></Link>) 
    }
    return (
       
        <div className="main">
            {blocks}
        </div>
     
    )
}

export default Politic
