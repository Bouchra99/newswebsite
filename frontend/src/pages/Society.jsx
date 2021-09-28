import '../styles/categories.css'
import Data from '../data/data'
import CategoryBlock from '../components/blocks/CategoryBlock'
import { Link } from 'react-router-dom'

const Society = () => {
    
    var articles = Data()

    if(typeof articles!=='undefined'){
        var blocks = articles.filter(a =>  a.category =='Society').
        map(a => <Link key={a.id} className="Link" to={`/article/${a.id}`}>
            <CategoryBlock  article = {a} /></Link>) 
    }
    return (
        <div className="main">
            {blocks}
        </div>
    )
    
}

export default Society
