import '../styles/Contact.css'
import { useRef, useState } from "react"
import {motion} from 'framer-motion'
import emailjs from '@emailjs/browser';


const Terminal = () => {
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [mobile,setMobile] = useState("")
    const [message,setMessage] = useState("")
    const ref = useRef()

    const commands = [
        {str:"C:/User> set Name = ",func:setName}, 
        {str:`C:/${name}> set Email = `,func:setEmail},
        {str:`C:/${name}> set MobileNumber = `,func:setMobile},
        {str:`C:/${name}>Message: `,func:setMessage},
        {str:"Press any key to push...",func:()=>{
            sendMail({name:name,email:email,message:message,mobile:mobile})
        }},{
            str:"Message pushed....",func:()=>{}
        }
    ]

    const sendMail = (data)=>{
        emailjs.send('service_tas5c3i', 'template_mcs38eb', data, 'qeT9Zf5W2-mTuA8rw')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
    }
    const [flow,setFlow] = useState([])
    const [curr,setCurr] = useState(0)
    const [inputValue,setInputValue] = useState('_')
    return <motion.div initial={{x:-100}} whileInView={{x:0}} className='contact-window' onClick={()=>ref.current.focus()}>
        <div className="title">
            <h3>Nawf Terminal</h3>
        </div>
        <ul>
            {flow.map(item=><li>{item}</li>)}
            <li>{commands[curr].str}<input ref={ref} className='command' type="text" onChange={e=>setInputValue(e.target.value)} onKeyDown={e=>{
                if(e.key==='Enter'){
                    setFlow(prevValue=>[...prevValue,commands[curr].str+e.target.value])
                    commands[curr].func(e.target.value)
                    setInputValue("_")
                    if(curr<commands.length-1){
                        setCurr(prev=>prev+1)
                    }
                }
            }} value={inputValue}/></li>
        </ul>
       
    </motion.div>;
}
 
export default Terminal;