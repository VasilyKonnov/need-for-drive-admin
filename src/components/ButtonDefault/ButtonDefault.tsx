import { Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { TButtonDefault } from './ButtonDefaultTypes'
import classNames from 'classnames'

const useStyles = makeStyles({
  button: {
    textTransform: 'initial',
    background: '#E9ECEF',
    color: '#3D5170;',
    '&:hover': {
      background: '#DBDEE1',
    },
    '&:disabled': {
      background: '#DBDEE1',
    },
  },
})

export const ButtonDefault: React.FC<TButtonDefault> = ({
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
