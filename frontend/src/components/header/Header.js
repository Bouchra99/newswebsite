
import {FaSistrix,FaEnvelopeOpenText,FaPhone} from 'react-icons/fa'
import {VscThreeBars, VscColorMode } from "react-icons/vsc"
import './Header.css' ;

import Navbar from './navbar/Navbar'; 

const Header = () => {
    return (
        <div className="header">
            <section className ="top">
                <section className="bars"><button><VscThreeBars size={28}/></button></section>
                <section className="logo"><a href =""><b>News</b></a></section>
                <section className="searchinput">
                    <input type ='text' placeholder ='search..'></input>
                    <button type='submit'><FaSistrix /></button>
                </section>
                <section className="contactInfo">
                    <section><FaEnvelopeOpenText/> news@contact.info</section>
                    <section><FaPhone /> +212 576******</section>
                </section>
                <section className ='mode'><button><VscColorMode size={28}/></button></section>
            </section>
            <section className ="separator-line"></section>
            <section className ="bottom">
                <section><Navbar /></section>
            </section>
        </div>
    )
}

export default Header
