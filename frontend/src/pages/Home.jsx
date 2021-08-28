

import {useEffect, useState} from 'react'; 
import SimpleCard from '../components/cards/SimpleCard'
import LargeCard from '../components/cards/LargeCard'
import MediumCard from '../components/cards/MediumCard'
import './home.css'
import image1 from '../map.jpg'
import image2 from '../fatima.jpg'
import Article from './Article';
import Politic from './Politic';
import { render } from '@testing-library/react';



const Home = () => {
   
  

    const[articlesList,setArticlesList] = useState(null)
    
    useEffect( ()=> {
    // console.log("here")

    if(!articlesList){
      fetch('http://localhost:8080/api/v2/articles').then(response=>
      response.json()).then(listOfArticles => {
        // console.log("list of all articles : ",listOfArticles)
        setArticlesList(listOfArticles)
      })
    }

    },[articlesList])
     
    if(articlesList){  
      var articles = articlesList.map(a => ({...a})) 
    }

  //   if(typeof articles!=="undefined"){
  //     console.log(articles);
  //     for(let i=0;i<articles.length;i++){
  //       switch(articles[i].category){
  //          case  'Politic' : console.log("pollitic");console.log(articles[i]); break;
  //          case 'Sport' :  console.log("sport");console.log( articles[i]); break;
  //          case 'Society' :  console.log("society");console.log(articles[i]); break;
  //     }
  //   }
  // }

    return ( 
      
        <div className="body">
            
            <div className ="div1">
              { typeof articles !== "undefined" ? 
              <SimpleCard category ={articles[0].category} title = {articles[1].title} preview ={articles[1].preview} /> : console.log("wait")}
            </div>
            <div className ="div2">
            { typeof articles !== "undefined" ? 
              <LargeCard image ={<img src = {image1} />} title = {articles[0].title} preview ={articles[0].preview} /> : console.log("wait")}
            
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
            {/* { typeof articles !== "undefined" ? 
              <MediumCard image ={<img src = {image2} />}  category ={articles[5].category} title = {articles[5].title} preview ={articles[5].preview} /> : console.log("wait")} */}
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
  

export default Home

