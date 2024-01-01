import '../styles/SkillSet.css'

const SkillSet = () => {
    const toolBox = [
        ["HTML"],
        ["CSS"],
        ["JavaScript"],
        ["Python"],
        ["React"],
        ["JQuery"],
        ["Express.js"],
        ["Flask"],
        ["Flutter"],
        ["Pandas"],
        ['Numpy']
    ]
    return (
        <section id="skills">

            <h2>My Tool Box</h2>
            <div className="toolBox">
                <div className="controls">
                    <div className="box" style={{background:"#FF605C"}}></div>
                    <div className="box" style={{background:"#FFBD44"}}></div>
                    <div className="box" style={{background:"#00CA4E"}}></div>
                </div>
                <div className='screen'>
                    {toolBox.map((tool,index)=><p key={index}>{tool[0]}</p>)}
                </div>
            </div>
        </section>
    );
}
 
export default SkillSet;