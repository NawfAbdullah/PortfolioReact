import '../../styles/CircularButton.css'

const CircularButton = ({children,onClick,style}) => {
    return (  
        <button style={style} className='circular-button' onClick={onClick}>
            {children}
        </button>
    );
}
 
export default CircularButton;