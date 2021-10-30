
import '../../styles/admin.css'
import { useState } from "react"
const AddArticle = () => {
    
    const [title, setTitle] = useState("");
    const [preview, setPreview] = useState("");
    const [author, setAuthor] = useState({"firstName":"","lastName":""});
    const [text, setText] = useState("")
    const [category, setCategory] = useState("Sport");

    const submit=()=>{
        if(title!=="" && preview!=="" && text !==""){
            const newArticle ={category,title,preview,text};
            const options = {
                method : 'POST',
                mode : 'cors',
                headers : {
                    'Content-Type':'application/json',
                    'token' : 'Bearer '+localStorage.getItem('token')
                },
                body: JSON.stringify(newArticle)
            }
            fetch('http://localhost:8080/api/v2/admin/add',options).then(
                console.log('new article added ', JSON.stringify(newArticle))
                // window.alert('Article Added')
            )
        }else{
            window.alert("Insert details")
        }
        setTitle('');
        setPreview('');
        setText('');
    }

    return (
        <div className="forms">
            <label ><b>Category</b> <tab/> 
            <select 
                value = {category}
                onChange = {(e)=>setCategory(e.target.value)}
                >
                <option value="Sport">Sport</option>
                <option value="Politic">Politic</option>
                <option value="Society">Society</option>
            </select>
            </label>
            
           <input 
                type="text"
                value={title} 
                onChange={(e)=>setTitle(e.target.value)}
                placeholder="Title">
            </input>
           <textarea 
                rows ="5" 
                value = {preview}
                onChange = {(e)=>setPreview(e.target.value)}
                placeholder="Preview">
            </textarea>
           <input 
                type="text" 
                placeholder="Author">
            </input>
           <textarea 
                rows="10" 
                value = {text}
                onChange={(e)=>setText(e.target.value)}
                placeholder="Text">
           </textarea>
           <button onClick={submit} className="update-articles submit">Submit</button>
        </div>
    )
}

export default AddArticle
