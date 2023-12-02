import '../styles/Project.css'
import Pilot from '../assets/images/projects/pilot.png'
import Club from '../assets/images/projects/cisc.png'
import CircularButton from './Buttons/CircularButton';
import {motion} from 'framer-motion';



const Projects = () => {
    return ( 
        <div className="projects ">
            <div className="project odd">
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
            </div>
        </div>
     );
}
 
export default Projects;