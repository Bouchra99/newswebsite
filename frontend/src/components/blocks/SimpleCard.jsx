import { Link } from 'react-router-dom'
import './SimpleCard.css'


const SimpleCard = (prop) => {
    const article = prop.article ;
    return (
        <div className ="sCard">
            <div className ="category">{article.category}</div>
            <div className ="sTitle"><b>{article.title}</b></div>
            <div className ="sPreview">{article.preview}</div>
        </div>
    )
} 

export default SimpleCard 