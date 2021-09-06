import { Link } from 'react-router-dom'
import './SimpleCard.css'


const SimpleCard = (props) => {
    return (
        <div className ="sCard">
            <div className ="category">{props.category}</div>
            <div className ="sTitle"><b>{props.title}</b></div>
            <div className ="sPreview">{props.preview}... <button>Learn more</button></div>
        </div>
    )
} 

export default SimpleCard 