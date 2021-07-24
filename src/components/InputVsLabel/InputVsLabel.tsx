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
  isValid,
  validMesage,
  value,
}) => {
  const classesLabel = classNames(
    classLabel ? classLabel : '',
    styles.label,
    isValid ? styles.noValid : '',
  )
  const classesInput = classNames(
    classInput ? classInput : '',
    styles.input,
    isValid ? styles.noValid : '',
  )
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
        value={value ? value : ''}
      />
      <span className={styles.errorMesage}>
        {validMesage ? validMesage : ''}
      </span>
    </div>
  )
}
