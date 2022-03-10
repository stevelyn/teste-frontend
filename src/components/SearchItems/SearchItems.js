import styles from './SearchItems.module.css'
import shippingIcon from '../../assets/images/ic_shipping.png'

function SearchItems({ item, handleOnClick }) {
  function click() {
    handleOnClick(item.id)
  }

  return (
    <div onClick={click} className={styles.item_container}>
      <img className={styles.thumbnail} src={item.picture} alt={'product-thumbnail'} />
      <div className={styles.item_container_info}>
        <section>
          <div className={styles.price_and_shipping}>
          <p className={styles.price}>${item.price.amount.toLocaleString('es-ar')}</p>
          {item.free_shipping === true && <img src={shippingIcon} alt={'shipping'} />}
          </div>
          <p className={styles.state_name}>{item.state_name}</p>
        </section>
        <p className={styles.title}>{item.title}</p>
      </div>
    </div>
  )
}

export default SearchItems;