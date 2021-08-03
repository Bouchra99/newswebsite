import React from 'react'
import SimpleCard from './cards/SimpleCard'
import LargeCard from './cards/LargeCard'
import MediumCard from './cards/MediumCard'
import './Body.css'
import image1 from '../../soufiane.jpeg'




const Body = () => {
    return (
        <div className="body">
          <div className ="div1">
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
           securing Morocco’s first medal since the start of the Tokyo Summer Olympics" /> </div>
         
        
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

           {/* <SimpleCard  category = "sport" title ="Gold Medal for Morocco" preview ="The Moroccan champion broke a long olympic streak of Kenyan wins this Monday, 
      securing Morocco’s first medal since the start of the Tokyo Summer Olympics" />
            
            
            <LargeCard  title ='Gold Medal for Morocco' image = {<img src = {image1} />} /> */}
            
        </div>

    )
}

export default Body
