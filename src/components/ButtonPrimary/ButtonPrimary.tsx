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
    '&:disabled': {
      background: '#F5F6F8',
    },
  },
})

export const ButtonPrimary: React.FC<TButtonPrimary> = ({
  onClick,
  children,
  className,
  disabled,
  type,
}) => {
  const classes = useStyles()
  const classNameButton = classNames(classes.button, className ? className : '')
  if (onClick) {
    return (
      <Button
        type={type ? type : 'button'}
        disabled={disabled}
        onClick={onClick}
        className={classNameButton}
      >
        {children}
      </Button>
    )
  } else {
    return (
      <Button
        type={type ? type : 'button'}
        disabled={disabled}
        className={classNameButton}
      >
        {children}
      </Button>
    )
  }
}
