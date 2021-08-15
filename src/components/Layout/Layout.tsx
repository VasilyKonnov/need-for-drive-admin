import { makeStyles } from '@material-ui/core/styles'
import { useState, useEffect } from 'react'
import {
  getAccessToken,
  removeAccessToken,
  removeRefreshToken,
} from '../../helpers/cookieHelper'
import { LayoutView } from './LayoutView'
import { useHistory } from 'react-router-dom'
import { userAction } from '../../store/user/userAction'
import { useDispatch } from 'react-redux'
import { TLayout } from './LayoutTypes'

const useStyles = makeStyles({
  searchBtn: {
    color: '#CACEDB',
  },
  searchInput: {
    fontFamily: 'Helvetica',
    fontSize: '13px',
    color: '#767F9D',
    width: 'calc(100% - 60px)',
  },
})

export const Layout: React.FC<TLayout> = ({
  children,
  messageError,
  messageSuccess,
}) => {
  const classes = useStyles()
  const history = useHistory()
  const dispatch = useDispatch()

  const [anchorMenu, setAnchorMenu] = useState<HTMLButtonElement | null>(null)
  const handlerMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorMenu(event.currentTarget)
  }

  const handleMenuClose = () => {
    setAnchorMenu(null)
  }

  const open = Boolean(anchorMenu)
  const id = open ? 'menu-popover' : undefined

  const logOut = () => {
    removeAccessToken()
    removeRefreshToken()
    dispatch(userAction.remove())
    history.push('/')
  }

  useEffect(() => {
    const token = getAccessToken()
    if (!token) {
      history.push('/')
    }
  }, [history])

  return (
    <LayoutView
      id={id ? id : ''}
      handleMenuClose={handleMenuClose}
      handlerMenuOpen={handlerMenuOpen}
      classes={classes}
      open={open}
      anchorMenu={anchorMenu}
      logOut={logOut}
      children={children}
      messageSuccess={
        messageSuccess && messageSuccess.length > 0 ? messageSuccess : ''
      }
      messageError={messageError && messageError.length > 0 ? messageError : ''}
    />
  )
}
