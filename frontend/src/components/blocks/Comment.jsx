import React from 'react'
import './comment.css'
const Comment = (prop) => {
    return (
        <div className="comment-block">
            <div className="username">{prop.username}</div>
            <div className="text">{prop.text}</div>
            <ul>
                <li><button>Like</button>  {prop.likes}</li>
                <li><button>Dislike</button>  {prop.dislikes}</li>
            </ul>
            
        </div>
    )
}

export default Comment
