import '../styles/Project.css'
import Pilot from '../assets/images/projects/pilot.png'
import Club from '../assets/images/projects/cisc.png'
import TerminalIcon from '@mui/icons-material/Terminal';
import Self from '../assets/images/projects/self.png'
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
            <motion.div className="project">
                <div className="outline">
                    <div className="controls">
                        <div className="box" style={{background:"#FF605C"}}></div>
                        <div className="box" style={{background:"#FFBD44"}}></div>
                        <div className="box" style={{background:"#00CA4E"}}></div>
                    </div>
                    <div className="screen">
                        <img src={Self} alt="" />
                    </div>
                    <h4><TerminalIcon/>Self Driving Car</h4>
                </div>
            </motion.div>
        </div>
     );
}
 
export default Projects;