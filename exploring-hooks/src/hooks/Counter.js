import {useState,useEffect} from 'react'

const Counter=()=>{
    const [counter, setCounter] = useState(0)
   
    
        useEffect(() => {
            setTimeout(()=>{
                console.log("You clicked on: "+counter)
            },3000)
         })
    
    return(
        <>
         <p>Your clickes {counter} times</p>
         <button onClick={()=>setCounter(counter+1)}>Click me</button>
       {/*  <button onClick={handleAlertClick}>
            Show alert
        </button> */}
        </>
    )
}

export default Counter;