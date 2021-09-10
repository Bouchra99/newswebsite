
import { useEffect,useState } from "react"
const Comments = () => {

    const[commentList,setCommentList]= useState(null) 
    
    useEffect( ()=> {


    if(!commentList){
      fetch('http://localhost:8080/api/v2/comments').then(response=>
      response.json()).then(comment => {
        setCommentList(comment)
      })
    }

    },[commentList])

    if(commentList){  
        var comments = commentList.map(a => ({...a})) 
        console.log(comments)
      }
      return comments ;

}

export default Comments