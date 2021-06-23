import { InputBase } from '@material-ui/core'
import { TInputVsLabel } from './InputVsLabelTypes'
import classNames from 'classnames'
import styles from './InputVsLabel.module.scss'

export const InputVsLabel: React.FC<TInputVsLabel> = ({
  classLabel,
  classInput,
  label,
  id,
}) => {
  const classesLabel = classNames(classLabel ? classLabel : '', styles.label)
  const classesInput = classNames(classInput ? classInput : '', styles.input)
  return (
    <div className={styles.wrap}>
      <label htmlFor={id} className={classesLabel}>
        {label}
      </label>
      <InputBase id={id} className={classesInput} />
    </div>
  )
}
