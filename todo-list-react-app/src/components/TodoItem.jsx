import styles from "./todoItem.module.css"
export default function TodoItem({item, todos, setTodos}) {
    function handleClick(item) {
        console.log('click delete', item);
        setTodos(todos.filter(todo => todo !== item));
    }
    return (
    <div className={styles.item}>
        <div className={styles.itemContainer}>
            <div className={styles.itemName}>{item}</div>
            <button className={styles.itemButton} onClick={() =>handleClick(item)}>X</button>
        </div>
        <hr className= {styles.line}/>
    </div>
    );
}