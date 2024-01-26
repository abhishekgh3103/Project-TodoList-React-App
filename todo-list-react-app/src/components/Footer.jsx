import styles from './footer.module.css'
export default function Footer({completedTasks, totalTasks}) {
    return(
        <div className={styles.footerDiv}>
            <span className={styles.footerItem}>Completed Tasks: {completedTasks}</span>
            <span className={styles.footerItem}>Total Tasks: {totalTasks}</span>
        </div>
    );
}