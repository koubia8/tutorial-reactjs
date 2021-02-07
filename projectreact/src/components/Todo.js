import {useState} from 'react'

const Todo=()=>{
    const [todos, setTodos] = useState([
        {id:Math.random(),name:"Acheter du pain"},
        {id:Math.random(),name:"Acheter du lait"},
        {id:Math.random(),name:"Acheter du fromate"},
    ])
    const myTodos= todos.map((todo)=>{
    return(
    <li className="list-group-item" key={todo.id}>{todo.name}</li>
        )
    }
    )
    return(
        <div>
            <h1 className="text-center">{todos.length} Tod-do</h1>
            <ul>
                {myTodos}
            </ul>
        </div>
    )
}
export default Todo