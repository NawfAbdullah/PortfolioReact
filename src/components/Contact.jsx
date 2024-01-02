import '../styles/contactv2.css'
import {Email,LinkedIn,Instagram,GitHub,ContactPage,Terminal,Book, Close} from '@mui/icons-material/';
import ButtonInput from './ButtonInput';
import Resume from '../assets/doc/resume.pdf'
import { useState } from 'react';
import Cmd from './Terminal';

const Contact = () => {
    const [terminalOpen,setTerminalOpen] = useState(false)
    const icons = [<Email />,<LinkedIn />,<Instagram />,<GitHub />,<Book />]
    const links = [
        'mailto:k.nawfabdullah@gmail.com',
        'https://in.linkedin.com/in/nawf-abdullah-69474a225',
        'https://www.instagram.com/nawf_abdullah/',
        'https://github.com/NawfAbdullah',
        '#'
    ]
    return ( 
    <div id="contact-monitor">
        {!terminalOpen?<>
            <ButtonInput placeholder={"Email/Phone"} btn_text={"Wanna talk??"} onClick={(data)=>{console.log(data);}} column={true}/>
            <div className="suggestions">
                {links.map((link,index)=><a href={link}>{icons[index]}</a>)}
                <a href={Resume} download="nawf_abdullah.pdf"><ContactPage /></a>
                <a href='#' onClick={(e)=>{
                    e.preventDefault()
                    setTerminalOpen(true)
                    }}><Terminal /></a>
            </div>
        </>:<><Close className='x' onClick={()=>setTerminalOpen(false)}/><Cmd /></>}
    </div>  
    );
}
 
export default Contact;