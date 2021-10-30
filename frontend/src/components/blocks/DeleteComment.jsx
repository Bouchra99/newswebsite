import '../../styles/admin.css'
import { useState } from "react";

const DeleteComment = () => {
    const[commentID,setCommentID] = useState("");
    const options = {
        method : 'GET',
        mode : 'cors',
        headers : {
            'token' : 'Bearer '+localStorage.getItem('token')
        }
    }
    const submit=()=>{
        window.alert("submit clicked")
        fetch(`http://localhost:8080/api/v2/admin/comment/delete/${commentID}`,options)
        setCommentID('')
    }
    return (
        <div className="forms" style={{textAlign:"start"}} >
            <div >
                <label for="id" ><b> Comment ID :</b>  </label>
                <input
                    style={{width:"20%"}}
                    id ="id"
                    type="text"   
                    value ={commentID}
                    onChange ={(e)=>setCommentID(e.target.value)}    
                 >
                </input>
            </div>
           
            <div>
            <button onClick={submit} className="update-articles submit" style={{width:"10%"}}>Submit</button>
            </div>

        </div>
    )
}

export default DeleteComment
