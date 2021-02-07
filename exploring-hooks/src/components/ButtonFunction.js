import {useState} from 'react'

const ButtonFunction=()=>{
    const [buttonText, setButtonText] = useState("Clicked me, please")
    return(
        <button onClick={()=>setButtonText("Thanks, been clicked!")}>
            {buttonText}
        </button>
    )
}

export default ButtonFunction;