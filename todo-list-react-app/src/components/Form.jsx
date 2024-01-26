import styles from "./form.module.css"
import { useState } from "react";

export default function Form({todos,setTodos}) {
    const [todo, setTodo] = useState("");
    function handleClick(e) {
        e.preventDefault();
        setTodos([...todos, todo]);
        setTodo("");
    }
    return (
        <form 
        onSubmit={handleClick}
        className={styles.todoForm}>
                <input 
                className={styles.inputForm}
                type="text"
                placeholder="Enter Todo item here..." 
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
                />
                <button
                className={styles.buttonForm}
                type="submit">Add</button>
        </form>
    )
}