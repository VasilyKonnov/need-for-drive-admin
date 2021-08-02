import { imgUrl } from '../../constans/constans'
import styles from './OrderCard.module.scss'
import { TOrderCard } from './OrderCardTypes'

export const OrderCard: React.FC<TOrderCard> = ({
  imgSrc,
  carName,
  city,
  pointAddress,
  dateFrom,
  dateTo,
  isFullTank,
  isNeedChildChair,
  isRightWheel,
  price,
  color,
  editOrder,
}) => {
  return (
    <div className={styles.cardWrap}>
      <div className={styles.car}>
        <div className={styles.imgWrap}>
          {imgSrc ? (
            <img
              src={
                imgSrc.toString().slice(0, 4) === 'data'
                  ? imgSrc
                  : imgUrl + imgSrc
              }
              alt={carName}
            />
          ) : (
            '---'
          )}
        </div>
        <div className={styles.carInfo}>
          <p>
            <span>{carName}</span> в <span>{city}</span>, {pointAddress}
          </p>
          <p>
            {new Date(dateFrom).toLocaleString('ru')} —{' '}
            {new Date(dateTo).toLocaleString('ru')}
          </p>
          <p>
            Цвет: <span>{color} </span>
          </p>
        </div>
      </div>
      <div className={styles.additionally}>
        <p className={isFullTank ? styles.active : ''}>Полный бак</p>
        <p className={isNeedChildChair ? styles.active : ''}>Детское кресло</p>
        <p className={isRightWheel ? styles.active : ''}>Правый руль</p>
      </div>
      <div className={styles.price}>
        <span>{price} ₽</span>
      </div>
      <div className={styles.buttons}>
        <button className={styles.btnDone}>Готово</button>
        <button className={styles.btnUndo}>Отмена</button>
        <button className={styles.btnChange} onClick={() => editOrder()}>
          Изменить
        </button>
      </div>
    </div>
  )
}
