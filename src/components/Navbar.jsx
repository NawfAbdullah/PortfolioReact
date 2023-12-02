import { Close, Email, Instagram, LinkedIn, Menu } from '@mui/icons-material';
import '../styles/Navbar.css'
import { useState } from 'react';
import {motion} from 'framer-motion'

const Navbar = () => {
    const [showNav,setShowNav] = useState(window.innerWidth>532)

    return ( 
        <motion.nav initial={{x:-200}} animate={{x:0}}>
            <div className="logo">
                <p>Nawf</p>
                <p>Abdullah</p>
            </div>
            {showNav&&<ul>
                <li 
                    onClick={()=>{
                        document.querySelector('#hero').scrollIntoView({ 
                            behavior: 'smooth' ,
                          });
                    }}
                >Nawf Abdullah</li>
                <li
                    onClick={()=>{
                        document.querySelector('#skills').scrollIntoView({ 
                            behavior: 'smooth' ,
                          });
                    }}
                >About</li>
                <li onClick={()=>{
                        document.querySelector('#projects').scrollIntoView({ 
                            behavior: 'smooth' ,
                          });
                    }}>Projects</li>
                <li  onClick={()=>{
                        document.querySelector('#contact').scrollIntoView({ 
                            behavior: 'smooth' ,
                          });
                    }}>Contact</li>
            </ul>}
            <div className="socialmedia">
                <a href="https://www.instagram.com/nawf_abdullah/">
                    <Instagram />
                </a>
                <a href="https://in.linkedin.com/in/nawf-abdullah-69474a225">
                    <LinkedIn />    
                </a>
                <a href="mailto:k.nawfabdullah@gmail.com">
                    <Email />
                </a>
            </div>
            {window.innerWidth<532&&<div className='hamburger' onClick={()=>setShowNav(!showNav)}>{!showNav?<Menu />:<Close/>}</div>}
        </motion.nav>
     );
}
 
export default Navbar;