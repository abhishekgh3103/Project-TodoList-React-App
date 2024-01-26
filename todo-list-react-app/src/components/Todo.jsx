import { useState } from "react";

export default function Todo() {
    const [todo, setTodo] = useState("");
    const [todos, setTodos] = useState([]);

    function handleClick(e) {
        e.preventDefault();
        setTodos([...todos, todo]);
        setTodo("");
    }
    return (
        <div>
            <form onSubmit={handleClick}>
                <input 
                type="text" 
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
                />
                <button type="submit">Add</button>
            </form>
            {todos.map(item => <li key={item}>{item}</li>)}
        </div>
    ); 
}