import { Select } from '../Select'
import { TSelect } from './SelectVsLabelTypes'
import styles from './SelectVsLabel.module.scss'

export const SelectVsLabel: React.FC<TSelect> = ({
  handlerChange,
  labelId,
  id,
  data,
  label,
}) => {
  return (
    <div className={styles.selectWrap}>
      <p className={styles.title}>{label}</p>
      <Select
        labelId={labelId}
        id={id}
        label=""
        data={data}
        handlerChange={handlerChange}
      />
    </div>
  )
}
