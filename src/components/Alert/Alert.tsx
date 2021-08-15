import { TAlert } from './AlertTypes'
import { useState } from 'react'
import classNames from 'classnames'
import styles from './Alert.module.scss'

export const Alert: React.FC<TAlert> = ({ message }) => {
  const [close, setClose] = useState(false)

  const classWrap = classNames(
    !close ? styles.wrap : (styles.wrap, styles.hide),
  )

  const hadleClick = () => {
    setClose(true)
  }

  if (message.length > 0 && !close) {
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
