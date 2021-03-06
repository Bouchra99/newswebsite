import Data from '../data/data'
import CategoryBlock from '../components/blocks/CategoryBlock'
import { Link } from 'react-router-dom'
import '../styles/categories.css'

const Sport = () => {
    var articles = Data()
    
    if(typeof articles!=='undefined'){
        var blocks = articles.filter(a =>  a.category =='Sport').
        map(a => <Link  key={a.id} className="Link" to={`/article/${a.id}`}>
            <CategoryBlock  article ={a} /></Link>) 
    }
    return (
        <div className="main">
           {blocks}
        </div>
    )
}

export default Sport
