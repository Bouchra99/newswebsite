import './SimpleCard.css'

const SimpleCard = (props) => {
    return (
        <div className ="sCard">
            <div className ="category">{props.category}</div>
            <div className ="title"><b>{props.title}</b></div>
            <div className ="preview">{props.preview}... <a href="">learn more</a></div>
        </div>
    )
} 

export default SimpleCard 