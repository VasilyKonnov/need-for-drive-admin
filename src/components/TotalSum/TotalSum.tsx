import styles from './TotalSum.module.scss'
import { TTotalSum } from './TotalSumTypes'
import { getMinuteInDateDef, rounded } from '../../utils/common/common'
import { rateType } from '../../constans/constans'
import { useEffect } from 'react'

export const TotalSum: React.FC<TTotalSum> = ({
  selectedСar,
  selectedRate,
  startDate,
  endDate,
  setTotalSumOrder,
  isFullTank,
  isNeedChildChair,
  isRightWheel,
}) => {
  const addServicesSum = (sum: any) => {
    let totalSum = sum
    if (isFullTank) {
      totalSum = totalSum + 500
    }
    if (isNeedChildChair) {
      totalSum = totalSum + 500
    }
    if (isRightWheel) {
      totalSum = totalSum + 500
    }
    setTotalSumOrder(totalSum)
    return totalSum
  }

  const minutePrise = (val: number) => {
    let sum = rounded(val * getMinuteInDateDef(endDate - startDate))
    setTotalSumOrder(sum)
    return sum
  }

  const dayPrise = (val: number) => {
    let sum = rounded(
      (val / (24 * 60)) * getMinuteInDateDef(endDate - startDate),
    )
    setTotalSumOrder(sum)
    return sum
  }

  const weekPrise = (val: number) => {
    let sum = rounded(
      (val / (7 * 24 * 60)) * getMinuteInDateDef(endDate - startDate),
    )
    setTotalSumOrder(sum)
    return sum
  }

  if (selectedСar && selectedRate) {
    return (
      <p className={styles.price}>
        Цена: от {selectedСar.priceMin} до {selectedСar.priceMax} ₽
      </p>
    )
  }

  if (selectedRate && selectedRate.rateTypeId.id === rateType.day) {
    return (
      <p className={styles.price}>
        {endDate !== null && startDate !== null ? (
          <>
            Цена:{' '}
            <b>
              {addServicesSum(dayPrise(selectedRate.price))
                ? addServicesSum(dayPrise(selectedRate.price))
                : '---'}{' '}
              ₽
            </b>
          </>
        ) : (
          <>
            Цена:{' '}
            <b>
              {(setTotalSumOrder(addServicesSum(selectedRate.price)),
              addServicesSum(selectedRate.price))
                ? (setTotalSumOrder(addServicesSum(selectedRate.price)),
                  addServicesSum(selectedRate.price))
                : '---'}{' '}
              ₽
            </b>
          </>
        )}
      </p>
    )
  }

  if (selectedRate && selectedRate.rateTypeId.id === rateType.week) {
    return (
      <p className={styles.price}>
        {endDate !== null && startDate !== null ? (
          <>
            Цена:{' '}
            <b>
              {addServicesSum(weekPrise(selectedRate.price))
                ? addServicesSum(weekPrise(selectedRate.price))
                : '---'}{' '}
              ₽
            </b>
          </>
        ) : (
          <>
            Цена:{' '}
            <b>
              {(setTotalSumOrder(addServicesSum(selectedRate.price)),
              addServicesSum(selectedRate.price))
                ? (setTotalSumOrder(addServicesSum(selectedRate.price)),
                  addServicesSum(selectedRate.price))
                : '---'}{' '}
              ₽
            </b>
          </>
        )}
      </p>
    )
  }

  if (selectedRate && selectedRate.rateTypeId.id === rateType.minute) {
    return (
      <p className={styles.price}>
        {endDate !== null && startDate !== null ? (
          <>
            Цена:{' '}
            <b>
              {addServicesSum(minutePrise(selectedRate.price))
                ? addServicesSum(minutePrise(selectedRate.price))
                : '---'}{' '}
              ₽
            </b>
          </>
        ) : (
          <>
            Цена:{' '}
            <b>
              {(setTotalSumOrder(addServicesSum(selectedRate.price)),
              addServicesSum(selectedRate.price))
                ? (setTotalSumOrder(addServicesSum(selectedRate.price)),
                  addServicesSum(selectedRate.price))
                : '---'}{' '}
              ₽
            </b>
          </>
        )}
      </p>
    )
  }

  if (selectedRate && selectedRate.rateTypeId.id === rateType.weekSale) {
    return (
      <p className={styles.price}>
        {endDate !== null && startDate !== null ? (
          <>
            Цена:{' '}
            <b>
              {addServicesSum(weekPrise(selectedRate.price))
                ? addServicesSum(weekPrise(selectedRate.price))
                : '---'}{' '}
              ₽
            </b>
          </>
        ) : (
          <>
            Цена:{' '}
            <b>
              {(setTotalSumOrder(addServicesSum(selectedRate.price)),
              addServicesSum(selectedRate.price))
                ? (setTotalSumOrder(addServicesSum(selectedRate.price)),
                  addServicesSum(selectedRate.price))
                : '---'}{' '}
              ₽
            </b>
          </>
        )}
      </p>
    )
  }

  return (
    <p className={styles.price}>
      Цена: <b>проверьте заполнение всех полей</b>
    </p>
  )
}
