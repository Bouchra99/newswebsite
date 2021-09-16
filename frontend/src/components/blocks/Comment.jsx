import {useState,useEffect} from 'react'
import './comment.css'
const Comment = (prop) => {
    const comment = prop.comment ;

    const username = comment.username;
    const text = comment.text;
    const article_id = comment.article_id;
    const id = comment.id;

    const [likes, setlikes] = useState(comment.likes);
    const[dislikes,setdislikes] = useState(comment.dislikes);

    useEffect(() => {
        updateLikes();
    },)
    
    const updateLikes=()=>{
        console.log(likes, dislikes);
        const updatedComment = {id,username,text,likes,dislikes,article_id};
        const options = {
          method : 'POST',
          mode : 'cors',
          headers : {'Content-Type':'application/json'},
          body: JSON.stringify(updatedComment)
        };
        fetch(`http://localhost:8080/api/v2/comments/update/${id}`,options).then(
          console.log('new comment updated ', JSON.stringify(updatedComment))
      
        );

    }
   
   

    return (
        <div className="comment-block">
            <div className="username">{comment.username}</div>
            <div className="text">{comment.text}</div>
            <ul>
                <li><button onClick={()=>{setlikes(likes+1);updateLikes()}} > Like {likes}</button></li>
                <li><button onClick={()=>{setdislikes(dislikes+1);updateLikes()}}>Dislike {dislikes}</button></li>
            </ul>
            
        </div>
    )
}

export default Comment
