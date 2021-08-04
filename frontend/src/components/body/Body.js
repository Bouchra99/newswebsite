
import SimpleCard from './cards/SimpleCard'
import LargeCard from './cards/LargeCard'
import MediumCard from './cards/MediumCard'
import './Body.css'
import image1 from '../../map.jpg'
import image2 from '../../fatima.jpg'
import {useEffect, useState} from 'react'; 



const Body = () => {
    
    const[articlesList,setArticlesList] = useState(null)
   
    useEffect( ()=> {
    console.log("here")

    if(!articlesList){
      fetch('http://localhost:8080/api/v2/articles').then(response=>
      response.json()).then(listOfArticles => {
        console.log("list of all articles : ",listOfArticles)
        setArticlesList(listOfArticles)
      })
    }

    },[articlesList])
     
    if(articlesList){  var articles = articlesList.map(a => ({...a}))}
  
    return ( 
        <div className="body">
 
            <div className ="div1">
              { typeof articles !== "undefined" ? 
              <SimpleCard category ={articles[0].category} title = {articles[0].title} preview ={articles[0].preview} /> : console.log("wait")}
            </div>
            <div className ="div2">
            { typeof articles !== "undefined" ? 
              <LargeCard image ={<img src = {image1} />} title = {articles[1].title} preview ={articles[1].preview} /> : console.log("wait")}
            
            </div>
            <div className ="div3">
            { typeof articles !== "undefined" ? 
              <SimpleCard category ={articles[2].category} title = {articles[2].title} preview ={articles[2].preview} /> : console.log("wait")}
            </div>
            <div className ="div4">
            { typeof articles !== "undefined" ? 
              <SimpleCard category ={articles[3].category} title = {articles[3].title} preview ={articles[3].preview} /> : console.log("wait")} 
            </div>
            <div className ="div5">
            { typeof articles !== "undefined" ? 
              <SimpleCard category ={articles[4].category} title = {articles[4].title} preview ={articles[4].preview} /> : console.log("wait")}
            </div>
            <div className ="div6">
            { typeof articles !== "undefined" ? 
              <MediumCard image ={<img src = {image2} />}  category ={articles[5].category} title = {articles[5].title} preview ={articles[5].preview} /> : console.log("wait")}
            </div>
            <div className ="div7"></div>
            <div className ="div8"></div>
            <div className ="div9"></div>
            <div className ="div10"></div>
            <div className ="div11"></div>
            <div className ="div12"></div>
            <div className ="div13"></div>
            <div className ="div14"></div>
            <div className ="div15"></div>
            <div className ="div16"></div>
            <div className ="div17"></div>
            <div className ="div18"></div>
       </div>  ) 
    
    
}

export default Body

{/* <div className ="div1">
          <SimpleCard  category = "sport" title ="Gold Medal for Morocco" preview ="The Moroccan champion broke a long olympic streak of Kenyan wins this Monday, 
      securing Morocco’s first medal since the start of the Tokyo Summer Olympics" />
          </div>
          <div className ="div2"> <LargeCard  title ='Gold Medal for Morocco' image = {<img src = {image1} />} 
          preview ="The Moroccan champion broke a long olympic streak of Kenyan wins this Monday, 
          securing Morocco’s first medal since the start of the Tokyo Summer Olympics" /> </div>
          <div className ="div3">   <SimpleCard  category = "sport" title ="Gold Medal for Morocco" preview ="The Moroccan champion broke a long olympic streak of Kenyan wins this Monday, 
      securing Morocco’s first medal since the start of the Tokyo Summer Olympics" /></div>
          <div className ="div4">   <SimpleCard  category = "sport" title ="Gold Medal for Morocco" preview ="The Moroccan champion broke a long olympic streak of Kenyan wins this Monday, 
      securing Morocco’s first medal since the start of the Tokyo Summer Olympics" /></div>
       <div className ="div5">   <SimpleCard  category = "sport" title ="Gold Medal for Morocco" preview ="The Moroccan champion broke a long olympic streak of Kenyan wins this Monday, 
      securing Morocco’s first medal since the start of the Tokyo Summer Olympics" /></div>

          <div className ="div6">  <MediumCard  image = {<img src = {image1} />}  title ='Gold Medal for Morocco' 
           preview ="The Moroccan champion broke a long olympic streak of Kenyan wins this Monday, 
           securing Morocco’s first medal since the start of the Tokyo Summer Olympics" /> </div> */}

      {/* <SimpleCard  category = "sport" title ="Gold Medal for Morocco" preview ="The Moroccan champion broke a long olympic streak of Kenyan wins this Monday, 
      securing Morocco’s first medal since the start of the Tokyo Summer Olympics" />
            
            
            <LargeCard  title ='Gold Medal for Morocco' image = {<img src = {image1} />} /> */}          
