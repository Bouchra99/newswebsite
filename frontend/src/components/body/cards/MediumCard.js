import React from 'react'

import './MediumCard.css'

const MediumCard = (props) => {
    return (
        <div className="MCard">
           <div className="image">{props.image}</div>
           <div className="title"><b>{props.title}</b></div> 
           <div className="preview">{props.preview}... <a href="">learn more</a></div>     
        </div>
    )
}

export default MediumCard
