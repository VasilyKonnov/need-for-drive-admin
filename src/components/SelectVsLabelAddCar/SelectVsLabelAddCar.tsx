import { SelectAddCar } from './../SelectAddCar/SelectAddCar'
import { TSelect } from './SelectVsLabelTypes'
import styles from './SelectVsLabel.module.scss'
import classNames from 'classnames'

export const SelectVsLabelAddCar: React.FC<TSelect> = ({
  handlerChange,
  labelId,
  id,
  children,
  label,
  value,
  className,
}) => {
  const classWrap = classNames(styles.selectWrap, className ? className : '')
  return (
    <div className={classWrap}>
      <p className={styles.title}>{label}</p>
      <SelectAddCar
        value={value ? value : ''}
        labelId={labelId}
        id={id}
        label=""
        handlerChange={handlerChange}
      >
        {children}
      </SelectAddCar>
    </div>
  )
}
