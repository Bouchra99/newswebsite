import './categories.css'
import CategoryBlock from '../components/blocks/CategoryBlock'
import Data from './data'
import { Link } from 'react-router-dom'





const Politic = () => {

    var articles = Data()
    if(typeof articles !=='undefined'){
        var politicArticles = articles.filter(a =>  a.category =='Politic') 
    }
    if(typeof politicArticles!=='undefined'){
        var blocks = politicArticles.map(a => <Link className="Link" to={`/article/${a.id}`}><CategoryBlock title = {a.title} preview ={a.preview}/></Link>) 
    }
    return (
        <div className="main">
            {blocks}
        </div>
    )
}

export default Politic
