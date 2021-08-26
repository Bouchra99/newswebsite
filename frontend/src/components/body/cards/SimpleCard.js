import './SimpleCard.css'



 function openArticle() {
    return(

      console.log("clicked") 
    
    )
  }

const SimpleCard = (props) => {
    return (
        <div className ="sCard">
            <div className ="category">{props.category}</div>
            <div className ="sTitle"><b>{props.title}</b></div>
            <div className ="sPreview">{props.preview}... <button onClick={openArticle}>learn more</button></div>
        </div>
    )
} 

export default SimpleCard 