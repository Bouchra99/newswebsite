import '../../pages/admin.css'
import { useState } from "react";

const DeleteComment = () => {
    const[commentID,setCommentID] = useState("");
    
    const submit=()=>{
        window.alert("submit clicked")
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
            <button onClick={submit} className="update-articles" style={{backgroundColor:"black",width:"10%"}}>Submit</button>
            </div>

        </div>
    )
}

export default DeleteComment