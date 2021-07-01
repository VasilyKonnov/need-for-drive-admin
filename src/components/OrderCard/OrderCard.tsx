import styles from './OrderCard.module.scss'
import imgCar from '../../assets/image/car-stab.png'

export const OrderCard = () => {
  return (
    <div className={styles.cardWrap}>
      <div className={styles.car}>
        <div className={styles.imgWrap}>
          <img src={imgCar} alt="Картинка машины" />
        </div>
        <div className={styles.carInfo}>
          <p>ELANTRA в Ульяновск, Нариманова 42</p>
          <p>11.05.2020, 14:01 — 13.05.2020, 20:20</p>
          <p>Цвет: Голубой</p>
        </div>
      </div>
      <div className={styles.additionally}></div>
      <div className={styles.price}>
        <span>4 300 ₽</span>
      </div>
      <div className={styles.buttons}></div>
    </div>
  )
}
