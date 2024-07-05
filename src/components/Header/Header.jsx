import { formatDate } from "../../helpers/formatDate";
import styles from './styles.module.css';

const Header = () => {
   return (
      <header className={styles.header}>
         <div className={styles.titleContainer}>
            <h1 className={styles.title}>
               <span className={styles.wave}>Wave</span>
               <span className={styles.news}>News</span>
               <span className={styles.react}>React</span>
            </h1>
            <p className={styles.date}>{formatDate(new Date())}</p>
         </div>
         <p className={styles.credit}>
            Created by <a href="https://github.com/xellga-olga/News-React" target="_blank" rel="noopener noreferrer" className={styles.link}>Olya Plakhotnikova</a>
         </p>
      </header>
   )
}

export default Header;
