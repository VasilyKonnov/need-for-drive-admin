import { Select } from '../Select'
import { TSelect } from './SelectVsLabelTypes'
import styles from './SelectVsLabel.module.scss'

export const SelectVsLabel: React.FC<TSelect> = ({
  handlerChange,
  labelId,
  id,
  children,
  label,
  value,
}) => {
  return (
    <div className={styles.selectWrap}>
      <p className={styles.title}>{label}</p>
      <Select
        value={value ? value : ''}
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
