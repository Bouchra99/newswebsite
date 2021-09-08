import { Link } from 'react-router-dom'
import './SimpleCard.css'


const SimpleCard = (props) => {
    return (
        <div className ="sCard">
            <div className ="category">{props.category}</div>
            <div className ="sTitle"><b>{props.title}</b></div>
            <div className ="sPreview">{props.preview}</div>
        </div>
    )
} 

export default SimpleCard 