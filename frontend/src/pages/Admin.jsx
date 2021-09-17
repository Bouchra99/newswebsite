import './admin.css'
import { useState } from 'react'
import AddArticle from '../components/blocks/AddArticle'
import DeleteArticle from '../components/blocks/DeleteArticle'
import DeleteComment from '../components/blocks/DeleteComment'

const Admin = () => {

    const [form, setForm] = useState(<div className="forms">Forms</div>)

    const addArticle=()=>{
        console.log("ADD clicked")
        setForm(<AddArticle/>)
    }
    const deleteArticle=()=>{
        console.log("Delete clicked")
        setForm(<DeleteArticle/>)
    }
    const deleteComment=()=>{
        console.log("Delete clicked")
        setForm(<DeleteComment/>)
    }
    return (    
        <div className="admin">
            <div className="buttons">
                <p style={{textAlign:"center"}}>Manage Articles</p>
                <button onClick={()=>addArticle()} className="update-articles" style={{backgroundColor:"rgb(132, 241, 78)"}}>Add Article</button>
                <button onClick={()=>deleteArticle()} className="update-articles" style={{backgroundColor:"rgb(241, 78, 78)"}}>Delete Article</button>
                
                <p style={{textAlign:"center"}}>Manage Comments</p> 
                <button onClick={()=>deleteComment()} className="update-articles" style={{backgroundColor:"rgb(241, 78, 78)"}}>Delete Comment</button>
            </div>
            
            {form}
            
            
        </div>
    )
}

export default Admin
