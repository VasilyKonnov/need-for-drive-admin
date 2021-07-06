import { Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { TButtonSecondary } from './ButtonSecondaryTypes'
import classNames from 'classnames'

const useStyles = makeStyles({
  button: {
    textTransform: 'initial',
    background: '#CB3656',
    color: '#fff',
    '&:hover': {
      background: '#BB3B56',
    },
    '&:disabled': {
      background: '#BB3B56',
    },
  },
})

export const ButtonSecondary: React.FC<TButtonSecondary> = ({
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
