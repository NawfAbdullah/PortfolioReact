import { useState } from "react";
import '../styles/ButtonInput.css'

const ButtonInput = ({placeholder,onClick,btn_text}) => {
    const [data,setData] = useState("")
    
    return (  
        <div className="btn-input">
            <input type="text" onChange={(e)=>setData(e.target.value)} value={data} placeholder={placeholder} />
            <button onClick={()=>onClick(data)}>{btn_text}</button>
        </div>
    );
}
 
export default ButtonInput;