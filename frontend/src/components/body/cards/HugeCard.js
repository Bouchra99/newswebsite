import React from 'react'
import "./HugeCard.css"
const HugeCard = (props) => {
    return (
        <div className='HCard'>
            <div className="image">
                {props.image}
                <div className="title"><b>{props.title}</b></div>
            </div>
           
        </div>
    )
}

export default HugeCard
