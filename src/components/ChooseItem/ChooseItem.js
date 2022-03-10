import styles from './ChooseItem.module.css'

function ChooseItem({ item }) {
  function capitalizeFirstLetter(str) {
    const captalizedLetter = str.replace(/(?:^|\s)\S/g, function (letter) {
      return letter.toUpperCase()
    })
    return captalizedLetter;
  }

  return (
    <div className={styles.item_container} >
      <section className={styles.image_and_info}>
        <img src={item.picture} alt='product-pic' />
        <section className={styles.info}>
          <p className={styles.condition_and_quantity}>{capitalizeFirstLetter(item.condition)} - {item.sold_quantity} vendidos</p>
          <h4 className={styles.title}>{item.title}</h4>
          <div className={styles.price_container}>
            <p className={styles.price}>$ {item.price.amount.toLocaleString('es-ar')}</p>
            {item.price.decimals === 0 ? <span className={styles.decimals}>00</span>
              : <span className={styles.decimals}>{item.price.decimals}</span>}
          </div>
          <button className={styles.buy_button}>Comprar</button>
        </section>
      </section>

      <section className={styles.description_container}>
        <h4 className={styles.description_title}>Descripción del producto</h4>
        <p className={styles.description}>{item.description}</p>
      </section>
    </div>
  )
}

export default ChooseItem;