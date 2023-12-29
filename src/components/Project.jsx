import '../styles/Project.css'
import Pilot from '../assets/images/projects/pilot.png'
import Club from '../assets/images/projects/cisc.png'
import TerminalIcon from '@mui/icons-material/Terminal';
import CircularButton from './Buttons/CircularButton';
import {motion} from 'framer-motion';



const Projects = () => {
    return ( 
        <div className="projects ">
            <motion.div className="project">
                <div className="outline">
                    <div className="controls">
                        <div className="box" style={{background:"#FF605C"}}></div>
                        <div className="box" style={{background:"#FFBD44"}}></div>
                        <div className="box" style={{background:"#00CA4E"}}></div>
                    </div>
                    <div className="screen">
                        <img src={Pilot} alt="" />
                    </div>
                    <h4><TerminalIcon/>Pilot admin portal</h4>
                </div>
            </motion.div>
            <motion.div className="project">
                <div className="outline">
                    <div className="controls">
                        <div className="box" style={{background:"#FF605C"}}></div>
                        <div className="box" style={{background:"#FFBD44"}}></div>
                        <div className="box" style={{background:"#00CA4E"}}></div>
                    </div>
                    <div className="screen">
                        <img src={Club} alt="" />
                    </div>
                    <h4><TerminalIcon/>CISC Club official website</h4>
                </div>
            </motion.div>
            {/* <div className="project odd">
                <motion.img initial={{x:window.innerWidth>600?-400:-100,opacity:0}} whileInView={{x:0,opacity:1}} transition={{duration:1.2}} src={Pilot} alt="" />
                <motion.div className="pro-details" initial={{x:window.innerWidth>600?400:100,opacity:0}} whileInView={{x:0,opacity:1}} transition={{duration:1.2}}>
                    <h4>Pilot Admin Portal</h4> 
                    <p className="tagline">React.js</p>
                    <CircularButton style={{borderRadius:20,height:60}}>View</CircularButton>
                </motion.div>
            </div>
            <div className="project even">
                <motion.img initial={{x:window.innerWidth>600?400:100,opacity:0}} whileInView={{x:0,opacity:1}} transition={{duration:1.2}} src={Club} alt="" />
                <motion.div className="pro-details" initial={{x:window.innerWidth>600?-400:-100,opacity:0}} whileInView={{x:0,opacity:1}} transition={{duration:1.2}}>
                    <h4>CISC Club official website</h4>
                    <p className="tagline">MERN Stack</p>
                    <CircularButton style={{borderRadius:20,height:60}}>View</CircularButton>
                </motion.div>
            </div> */}
        </div>
     );
}
 
export default Projects;