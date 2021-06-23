import { Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { TButtonPrimary } from './ButtonPrimaryTypes'
import classNames from 'classnames'

const useStyles = makeStyles({
  button: {
    textTransform: 'initial',
    background: '#007BFF',
    color: '#fff',
    '&:hover': {
      background: '#004DFF',
    },
  },
})

export const ButtonPrimary: React.FC<TButtonPrimary> = ({
  handlerClick,
  children,
  className,
}) => {
  const classes = useStyles()
  const classNameButton = classNames(classes.button, className ? className : '')
  if (handlerClick) {
    return (
      <Button onClick={handlerClick} className={classNameButton}>
        {children}
      </Button>
    )
  } else {
    return <Button className={classNameButton}>{children}</Button>
  }
}
