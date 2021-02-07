
import {useEffect,useState} from 'react'

function FunctionCount() {

    const [counter, setCounter] = useState(0)
    const [name, setName] = useState('')
    useEffect(() => {
        console.log("Mise à jours du component DiUpdate")
        setTimeout(()=>{document.title=`vous avez cliquez ${counter} fois`},5000)
       
    },[])

    return (
        <div>
            <h1>{counter}</h1>
            <input type="text" value={name} onChange={e=> setName(e.target.value)}/>
            <button onClick={()=>setCounter(counter+1)}>cliquez</button>
        </div>)
}

export default FunctionCount
