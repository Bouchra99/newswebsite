import './slider.css'
import './categoryBlock.css'
import {FaArrowCircleLeft,FaArrowCircleRight} from 'react-icons/fa'
import { useState, useEffect } from 'react'


const Content = (prop)=> {
    var article = prop.content ;
    return (
        <>
         <div className ="title">{article.title}</div>
         <div className ="preview">{article.preview}</div>
          
        </>
    )
}
const Slider = () => {
   
    const [content,setContent]=useState([{"title":"","preview":""}]);
    const[counter,setCounter]=useState(0);

    useEffect(() => {
        fetch('http://localhost:8080/api/v2/articles').then(
          res=> res.json()).then(
            res=> {
                
                setContent(res.filter(a=> res.indexOf(a)>= res.length-3))
                
            }   
    )
        
    }, [])

    console.log("content", content)
    

    const gotoprevious = ()=>{
        counter > 0  ? setCounter(counter-1) : setCounter(content.length-1);
    }
    
    const gotonext = ()=>{
        counter < content.length-1 ?  setCounter(counter+1) : setCounter(0);
    }

    return (
        <div className="slider">
            <button className="arrow" onClick={gotoprevious} id="left">
                <FaArrowCircleLeft size={25}/>
            </button>
            <div className="content" >
             <Content content={content[counter]}/>
            </div>
            <button className="arrow" id="right">
                <FaArrowCircleRight onClick={gotonext} size={25}/>
            </button> 
            
        </div>
    )
}

export default Slider
