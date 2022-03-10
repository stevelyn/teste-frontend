import styles from './Breadcrumb.module.css'

function Breadcrumb({ categories }) {
  return (
    <ul className={styles.breadcrumb}>
      {categories && categories.map(category => (<li className={styles.breadcrumb_category} key={category}>{category}</li>))}
    </ul>
  )
}

export default Breadcrumb;