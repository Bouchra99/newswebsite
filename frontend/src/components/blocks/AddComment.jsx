
import './comment.css'
const AddComment = () => {
    return (
        <>
            
        <form className="comment-form">
        <div className="comment-form-fields">
          <input placeholder="username" type="text" required ></input><br />
          <textarea placeholder="add your comment here" rows="4" ></textarea>
        </div>
        <div className="comment-button">
          <button type="submit" >Post Comment</button>
        </div>
      </form>
            
        </>
    )
}



export default AddComment
