import { InputBase } from '@material-ui/core'
import { TInputVsLabel } from './InputVsLabelTypes'
import classNames from 'classnames'
import styles from './InputVsLabel.module.scss'

export const InputVsLabel: React.FC<TInputVsLabel> = ({
  classLabel,
  classInput,
  label,
  id,
  onChange,
  type,
}) => {
  const classesLabel = classNames(classLabel ? classLabel : '', styles.label)
  const classesInput = classNames(classInput ? classInput : '', styles.input)
  return (
    <div className={styles.wrap}>
      <label htmlFor={id} className={classesLabel}>
        {label}
      </label>
      <InputBase
        type={type ? type : 'text'}
        id={id}
        className={classesInput}
        onChange={onChange}
      />
    </div>
  )
}
