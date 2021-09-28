import '../../styles/admin.css'
import { useState } from 'react';

const DeleteArticle = () => {
    const[articleId,setArticleId] = useState("");

    const submit =()=>{
        console.log(articleId);
        
        fetch(`http://localhost:8080/api/v2/admin/delete/${articleId}`).then(
            console.log("Article deleted",JSON.stringify(articleId))
            
        )
        setArticleId('')
    }
    return (
    
        <div className="forms" style={{textAlign:"start"}} >
            <div >
                <label for="id" ><b> Article ID :</b>  </label>
                <input
                    style={{width:"20%"}}
                    id ="id"
                    type="text"   
                    value ={articleId}
                    onChange ={(e)=>setArticleId(e.target.value)}    
                 >
                </input>
            </div>
           
            <div>
            <button onClick={submit} className="update-articles submit" style={{width:"10%"}}>Submit</button>
            </div>

        </div>
    )
}

export default DeleteArticle
