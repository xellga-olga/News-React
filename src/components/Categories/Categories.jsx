import styles from './styles.module.css';

const Categories = ({ categories, setSelectedCategory, selectedCategory }) => {
  return (
    <div className={styles.categories}>
      {Array.isArray(categories) && categories.map(category => (
        <button 
          onClick={() => setSelectedCategory(category)} 
          className={selectedCategory === category ? styles.active : styles.item} 
          key={category}
        >
          {category}
        </button>
      ))}
    </div>
  )
}

export default Categories;
