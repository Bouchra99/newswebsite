import './categories.css'
import Data from '../data/data'
import CategoryBlock from '../components/blocks/CategoryBlock'
import { Link } from 'react-router-dom'

const Society = () => {
    
    var articles = Data()
    if(typeof articles !=='undefined'){
        var societyArticles = articles.filter(a =>  a.category =='Society') 
    }
    if(typeof societyArticles!=='undefined'){
        var blocks = societyArticles.map(a => <Link className="Link" to={`/article/${a.id}`}><CategoryBlock title = {a.title} preview ={a.preview}/></Link>) 
    }
    return (
        <div className="main">
            {blocks}
        </div>
    )
    
}

export default Society
