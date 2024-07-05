import { formatDate } from "../../helpers/formatDate"
import styles from './styles.module.css'

const Header = () => {
   return (
      <header className={styles.header}>
         <h1 className={styles.title}>
            <span className={styles.wave}>Wave</span>
            <span className={styles.news}>News</span>
            <span className={styles.react}>React</span>
         </h1>
         <p className={styles.date}>{formatDate(new Date())}</p>
      </header>
   )
}

export default Header