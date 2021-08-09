import { Select } from '../Select'
import { TSelect } from './SelectVsLabelTypes'
import styles from './SelectVsLabel.module.scss'
import classNames from 'classnames'

export const SelectVsLabel: React.FC<TSelect> = ({
  handlerChange,
  labelId,
  id,
  children,
  label,
  defaultValue,
  className,
}) => {
  const classWrap = classNames(styles.selectWrap, className ? className : '')
  return (
    <div className={classWrap}>
      <p className={styles.title}>{label}</p>
      <Select
        defaultValue={defaultValue ? defaultValue : ''}
        labelId={labelId}
        id={id}
        label=""
        handlerChange={handlerChange}
      >
        {children}
      </Select>
    </div>
  )
}
