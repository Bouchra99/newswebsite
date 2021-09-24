
import {FaEnvelopeOpenText,FaPhone} from 'react-icons/fa'
import {VscThreeBars, VscColorMode } from "react-icons/vsc"
import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Header.css' ;

import Navbar from './navbar/Navbar'; 
import Search from './Search';

const HNavBar =()=>{
    const [showLinks,setShowLinks]=useState(false);
    const closeLinks=()=>{
        setShowLinks(false)
    }
    return( 
        <section className="Hamburger-button">
            <button onClick={()=>setShowLinks(!showLinks) }><VscThreeBars  size={28}/></button>
            <div className="hidden" id={showLinks?"links":""}>
                 <Link to='/society'>
                     <button onClick={closeLinks}>Society</button>
                 </Link>
                 <Link to='/politic'>
                    <button onClick={closeLinks}>Politic</button>
                 </Link>
                 <Link to='/sport'>
                    <button onClick={closeLinks}>Sport</button>
                 </Link>

            </div>
        </section>
    )
    

}
const Header = () => {
    return (
        <div className="header">
            <section className ="top">
                <HNavBar/>
                <section className="logo"><Link to="/"><b>News</b></Link></section>
                <Search  id="search1"/>
                <section className="contactInfo">
                    <section><FaEnvelopeOpenText/> news@contact.info</section>
                    <section><FaPhone /> +212 576******</section>
                </section>
                <section className ='mode'><button><VscColorMode size={28}/></button></section>
            </section>
            {/* <section className ="separator-line"></section> */}
            <section className ="bottom">
                <section><Navbar /></section>
            </section>
            <br/>
            <section className ="separator-line"></section>
        </div>
    )
}

export default Header
