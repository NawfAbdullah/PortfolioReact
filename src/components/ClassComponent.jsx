import '../styles/ClassComponent.css'
import {motion} from 'framer-motion'

const ClassComponent = ({className,skillset,delay}) => {
    return (
        <motion.div initial={{scale:0}} whileInView={{scale:1}} transition={{delay:delay*0.3,duration:0.4}} className="class-component">
            <ul>
                <li><span style={{color:'rgb(162,162,162)'}}>1 |</span>&nbsp;<span style={{color:'#6488ea'}}>class</span> {className} {"{"}</li>
                <li><span style={{color:'rgb(162,162,162)'}}>2 |</span>&nbsp;&nbsp;&nbsp;<span style={{color:'#CF9FFF'}}>constructor</span>(){"{"}</li>
                {Object.keys(skillset).map((skill,index)=>{
                    return <li><span style={{color:'rgb(162,162,162)'}}>{index+3} |</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style={{color:'#2FAF91'}}>this</span>.{skill}{":"}{skillset[skill]}</li>
                })}
                
                <li><span style={{color:'rgb(162,162,162)'}}>6 |</span>&nbsp;&nbsp;&nbsp;{"  }"}</li>
                <li><span style={{color:'rgb(162,162,162)'}}>7 |</span>&nbsp;{"}"}</li>
            </ul>
        </motion.div>
    );
}
 
export default ClassComponent;