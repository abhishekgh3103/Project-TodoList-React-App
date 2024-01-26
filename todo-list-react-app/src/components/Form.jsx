import { useState } from "react";

export default function Form({todos,setTodos}) {
    const [todo, setTodo] = useState("");
    function handleClick(e) {
        e.preventDefault();
        setTodos([...todos, todo]);
        setTodo("");
    }
    return (
        <form onSubmit={handleClick}>
                <input 
                type="text" 
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
                />
                <button type="submit">Add</button>
        </form>
    )
}