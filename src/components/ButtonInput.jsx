import { useRef, useState } from "react";
import '../styles/ButtonInput.css'

const ButtonInput = ({placeholder,onClick,btn_text,column}) => {
    const [data,setData] = useState("")
    const ref = useRef()
    return (  
        <div className="btn-input" style={{
            display:'flex',
            flexDirection:(column&&window.innerWidth<650)?'column':'row'
        }}>
            <input type="text" onChange={(e)=>setData(e.target.value)} value={data} placeholder={placeholder} />
            <button onClick={()=>{onClick(data);ref.current.click()}}>{btn_text}</button>
            <a ref={ref} href="mailto:k.nawfabdullah@gmail.com"></a>
        </div>
    );
}
 
export default ButtonInput;