import styles from "./todoItem.module.css"
export default function TodoItem({item, todos, setTodos}) {
    function deleteBtn(item) {
        console.log('click delete', item);
        setTodos(todos.filter(todo => todo !== item));
    }
    function completeItem(name) {
        console.log('Completed task',name);
        const newArray = todos.map((todo) => todo.name === name ? {...todo, done: !todo.done}:todo);
        setTodos(newArray);
        console.log(todos)
    }
    return (
    <div className={styles.item}>
        <div className={styles.itemContainer}>
            <div className={item.done ? `${styles.itemName} ${styles.completed}` : styles.itemName} onClick={()=>completeItem(item.name)}>{item.name}</div>
            <button className={styles.itemButton} onClick={() =>deleteBtn(item)}>X</button>
        </div>
        <hr className= {styles.line}/>
    </div>
    );
}