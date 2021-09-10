
import {useEffect, useState} from 'react'; 



const Data =()=> {
    const[articlesList,setArticlesList]= useState(null) 
    
    useEffect( ()=> {


    if(!articlesList){
      fetch('http://localhost:8080/api/v2/articles').then(response=>
      response.json()).then(listOfArticles => {
        setArticlesList(listOfArticles)
      })
    }

    },[articlesList])
     
    if(articlesList){  
      var articles = articlesList.map(a => ({...a})) 
    }
    return articles ;
    
}   

export default Data