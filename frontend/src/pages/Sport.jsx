import './categories.css'
import Data from './data'
import CategoryBlock from '../components/blocks/CategoryBlock'
import { Link } from 'react-router-dom'

const Sport = () => {
    var articles = Data()
    if(typeof articles !=='undefined'){
        var sportArticles = articles.filter(a =>  a.category =='Sport') 
    }
    if(typeof sportArticles!=='undefined'){
        var blocks = sportArticles.map(a => <Link className="Link" to={`/article/${a.id}`}><CategoryBlock title = {a.title} preview ={a.preview}/></Link>) 
    }
    return (
        <div className="main">
           {blocks}
        </div>
    )
}

export default Sport
