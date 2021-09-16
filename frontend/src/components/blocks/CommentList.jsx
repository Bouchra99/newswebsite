import React from 'react'
import Comments from '../../data/comments'
import Comment from './Comment'
import './comment.css'
const CommentList = () => {
    var comment = Comments()

    if(typeof comment!=='undefined'){
       
        var allComments = comment.map( a=> 
            <Comment key ={a.id} comment={a}  />
        ) 
    }
    return (
        <div className="comment-list">{allComments}</div>
    )
}

export default CommentList
