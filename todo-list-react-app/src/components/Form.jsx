import styles from "./form.module.css"
import { useState } from "react";

export default function Form({todos,setTodos}) {
    const [todo, setTodo] = useState({name:"", done: false});
    function handleClick(e) {
        e.preventDefault();
        setTodos([...todos, todo]);
        setTodo({name:"", done: false});
    }
    return (
        <form 
        onSubmit={handleClick}
        className={styles.todoForm}>
                <input 
                className={styles.inputForm}
                type="text"
                placeholder="Enter Todo item here..." 
                value={todo.name}
                onChange={(e) => setTodo({name:e.target.value, done: false})}
                />
                <button
                className={styles.buttonForm}
                type="submit">Add</button>
        </form>
    )
}