import { TAlert } from './AlertTypes'
import styles from './AlertError.module.scss'
import { useState } from 'react'
import classNames from 'classnames'

export const AlertError: React.FC<TAlert> = ({ message }) => {
  const [close, setClose] = useState(true)

  const classWrap = classNames(
    !close ? styles.wrap : (styles.wrap, styles.hide),
  )

  const hadleClick = () => {
    setClose(true)
  }

  if (!close && message.length > 0) {
    return (
      <div className={classWrap}>
        {message}
        <span onClick={hadleClick}></span>
      </div>
    )
  } else {
    return null
  }
}
