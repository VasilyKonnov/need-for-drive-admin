import imgCar from '../../assets/image/car-stab.png'
import styles from './OrderCard.module.scss'

export const OrderCard = () => {
  return (
    <div className={styles.cardWrap}>
      <div className={styles.car}>
        <div className={styles.imgWrap}>
          <img src={imgCar} alt="Картинка машины" />
        </div>
        <div className={styles.carInfo}>
          <p>
            <span>ELANTRA</span> в <span>Ульяновск</span>, Нариманова 42
          </p>
          <p>11.05.2020, 14:01 — 13.05.2020, 20:20</p>
          <p>
            Цвет: <span>Голубой</span>
          </p>
        </div>
      </div>
      <div className={styles.additionally}>
        <p className={styles.active}>Полный бак</p>
        <p>Детское кресло</p>
        <p>Правый руль</p>
      </div>
      <div className={styles.price}>
        <span>4 300 ₽</span>
      </div>
      <div className={styles.buttons}>
        <button className={styles.btnDone}>Готово</button>
        <button className={styles.btnUndo}>Отмена</button>
        <button className={styles.btnChange}>Изменить</button>
      </div>
    </div>
  )
}
