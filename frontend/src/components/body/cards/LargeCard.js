import React from 'react'
import "./LargeCard.css"
const LargeCard = (props) => {
    return (
        <div className='LCard'>
            <div className="image">{props.image}</div>
           <div className="title"><b>{props.title}</b></div>
           <div className="preview">{props.preview}... <a href="">learn more</a></div>
           
        </div>
    )
}

export default LargeCard
