import React from 'react'
import Comments from '../../data/comments'
import Comment from './Comment'
import './comment.css'
const CommentList = () => {
    var comment = Comments()

    if(typeof comment!=='undefined'){
       
        var allComments = comment.map(a => 
            <Comment username ={a.username.userName} text = {a.text} likes ={a.likes} dislikes={a.dislikes}/>
        ) 
    }
    return (
        <div className="comment-list">{allComments}</div>
    )
}

export default CommentList
