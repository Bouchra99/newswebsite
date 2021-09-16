
import './comment.css'
import { useState } from 'react';
import Comment from './Comment';
const AddComment = (prop) => {

    const [username, setusername] = useState('');
    const [text, settext] = useState('');
    // const [likes, setlikes] = useState(0);
    // const [dislikes, setdislikes] = useState(0);
    const likes = 0 ;
    const dislikes = 0 ;
    const article_id = prop.id;

  

    const submit=(e)=>{
      // e.preventDefault();
      
      if(username!=='' && text!==''){
        const newComment = {username,text,likes,dislikes,article_id};
        const options = {
          method : 'POST',
          mode : 'cors',
          headers : {'Content-Type':'application/json'},
          body: JSON.stringify(newComment)
        };
        fetch('http://localhost:8080/api/v2/comments/add',options).then(
          console.log('new comment added ', JSON.stringify(newComment))
      
        );
      }else{
        window.alert('Add username and text')
      }
      
    }

    return (
        <>   
        <form className="comment-form">
        <div className="comment-form-fields">
          <input 
            placeholder="username" 
            type="text" 
            value = {username}
            onChange ={(e)=>{setusername(e.target.value)}}
            required >
          </input><br />
          <textarea 
            placeholder="add your comment here" 
            rows="4" 
            value ={text}
            onChange={(e)=>settext(e.target.value)}
            required >   
          </textarea>
        </div>
        <div className="hidden-div">{article_id}</div>
        <div className="comment-button">
          <button type="submit" onClick={submit}>Post Comment</button>
        </div>
       
        </form>
            
        </>
    )
}



export default AddComment
