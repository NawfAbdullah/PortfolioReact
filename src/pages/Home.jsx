import '../styles/Home.css'
import Me from '../assets/images/me21.png'
import {motion} from 'framer-motion'
import CircularButton from '../components/Buttons/CircularButton';
import DnsRoundedIcon from '@mui/icons-material/DnsRounded';
import DesktopMacRoundedIcon from '@mui/icons-material/DesktopMacRounded';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import Projects from '../components/Project';
import ClassComponent from '../components/ClassComponent';
import Contact from '../components/Contact';

const Home = () => {
    return ( 
        <div className="home">
            <section id="hero">
                <div className="hero-details">
                    <p className='hello'>Hi, I am</p>
                    <motion.h1
                        initial={{x:-400}}
                        animate={{x:0}}
                        transition={{duration:0.7}}
                        >
                        Nawf Abdullah
                    </motion.h1>
                    <p className='typewriter'>a full stack developer</p>
                    <CircularButton onClick={()=>{
                        document.querySelector('#contact').scrollIntoView({ 
                            behavior: 'smooth' ,
                          });
                    }}>Start a project??</CircularButton>
                </div>
                <div className="hero-img">
                    <motion.img 
                        initial={{
                            y:300,
                            opacity:0,
                            duration:2
                        }}

                        animate={{
                            y:0,
                            opacity:1,
                        }}
                
                        src={Me} 
                        alt="Nawf Abdullah" 
                        className="hero" />
                </div>
            </section>
            <section id="skills">
                <h2>Skills installed</h2>
                <div className="box-container">
                    <motion.div className="box" initial={{y:300,opacity:0}} whileInView={{y:0,opacity:1}} transition={{duration:0.2,delay:0}}>
                        <div>
                            <DnsRoundedIcon sx={{fontSize:50}}/>
                            <h3 style={{borderColor:'#2FAF91'}}>Api <br/> Developement</h3>
                        </div>
                        <span>&lt;h3&gt;</span>
                        <p>
                            I have around 4 years experience in flask, express.js, fast api and also worked as an intern for around 2 months 
                        </p>
                        <span>&lt;/h3&gt;</span>
                    </motion.div>
                    <motion.div className="box" initial={{y:300,opacity:0}} whileInView={{y:0,opacity:1}} transition={{duration:0.2,delay:0.1}}>
                        <div>
                            <DesktopMacRoundedIcon sx={{fontSize:50}}/>
                            <h3 style={{borderColor:'#F9F871'}}>Web <br/> Developement</h3>
                        </div>
                        <span>&lt;h3&gt;</span>
                        <p>MERN stack maestro with 3+ years of hands-on expertise, fluent in crafting solutions with jQuery and vanilla JavaScript.</p>
                        <span>&lt;/h3&gt;</span>
                    </motion.div>
                    <motion.div className="box" initial={{y:300,opacity:0}} whileInView={{y:0,opacity:1}} transition={{duration:0.2,delay:0.2}}>
                        <div>
                            <SmartphoneIcon sx={{fontSize:50}}/>
                            <h3 style={{borderColor:'orange'}}>App <br/> Developement</h3>
                        </div>
                        <span>&lt;h3&gt;</span>
                        <p>I specialize in Android app development using Flutter and create desktop applications with Tkinter.</p>
                        <span>&lt;/h3&gt;</span>
                    </motion.div>

                </div>
            </section>
            <section id="projects">
                <h2>Projects</h2>
                <Projects />
            </section>
            <section id="journey">
                <h2>Journey</h2>
                <div className="grid">
                    <ClassComponent className={"Python"} delay={1} skillset={{
                        name:"'python'",
                        experience:"'3+ years'",
                        startedAt:"'March,2020'",
                        frameWorks:"['Flask','Selenium','Pandas','Numpy','OpenCV]",
                        studiedFrom:"['udemy','youtube']"
                    }}/>
                    <ClassComponent className={"JavaScript"} delay={2} skillset={{
                        name:"'JavaScript'",
                        experience:"'2+ years'",
                        startedAt:"'Febrauary 2021'",
                        frameWorks:"['React.js','Express.js','Mongoose.js']",
                        studiedFrom:"['udemy','youtube']"
                    }}/>
                    <ClassComponent className={"Database"} delay={3} skillset={{
                        name:"'Database'",
                        experience:"'2+ years'",
                        startedAt:"'2021'",
                        frameWorks:"['Sqlite','MySQL','Mongodb']",
                        studiedFrom:"['udemy','youtube']"
                    }}/>
                    <ClassComponent className={"Dart"} delay={4} skillset={{
                        name:"'Dart'",
                        experience:"'2+ months'",
                        startedAt:"'October 2023'",
                        frameWorks:"['Flutter']",
                        studiedFrom:"['udemy','youtube']"
                    }}/>
                </div>
            </section>
            <section id="contact">
                <h2>Contact</h2>
                <div className="tem-container">
                    <Contact />
                </div>
               
            </section>
        </div>
     );
}
 
export default Home;
