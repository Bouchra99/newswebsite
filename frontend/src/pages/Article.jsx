import './article.css'

import React from 'react'

const Article = (props) => {
    
    return (
        <div className="Article">
            <div className="aTitle"><b>{props.title}</b></div>
            <div className="aPreview">{props.preview}</div>
            <div className="aAuthor">author</div>
            <div className="aImage">image</div>
            <div className="aText">{props.text}</div>
        </div>
    )
}

export default Article
