import styles from "./Menu.module.css"

export function Menu(){
    return(
        <div className={styles.menu}>
            <ul>
                <li><a href="#">HOME</a></li>
                <li><a href="#">SOBRE</a></li>
                <li><a href="#">COLCHÕES</a></li>
                <li><a href="#">SÓFAS</a></li>
            </ul>
        </div>
    )
}